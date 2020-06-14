import React from 'react';
import {
  Switch,
  Route,
  useHistory,
  Redirect,
} from 'react-router-dom';
import { useMachine } from '@xstate/react';

/* @Selectors */
import { isCardsExistsSelector } from 'machines/game/selector';

/* @Pages */
import { Start } from 'pages/Start';
import { Game } from 'pages/Game';

/* @Machine */
import { gameMachine } from 'machines/game';

const App = () => {
  const history = useHistory();
  const [gameState, gameDispatch] = useMachine(gameMachine, {
    actions: {
      gameOver: () => history.push('/game-over'),
      gameWin: () => history.push('/win'),
    },
  });

  const onLoadCards = (cards: GameCard[]) => {
    gameDispatch({
      type: 'SET_CARDS',
      cards,
    });

    history.push('/game');
  };

  return (
    <Switch>
      <Route path="/game">
        {isCardsExistsSelector(gameState.context) ? (
          <Game state={gameState} dispatcher={gameDispatch} />
        ) : (
          <Redirect to="/" />
        )}
      </Route>
      <Route path="/game-over">
        <h1>Your Loos!</h1>
      </Route>
      <Route path="/win">
        <h1>Your Win!</h1>
      </Route>
      <Route path="/">
        <Start handleLoadCars={onLoadCards} />
      </Route>
    </Switch>
  );
};

export default App;