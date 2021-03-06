import React, { useEffect } from 'react';
import { useMachine } from '@xstate/react';

/* @Types */
import { GameState } from 'Machines/game/types';

/* @Components */
import { GameComponent } from './GameComponent';

/* @Machines */
import { countdownMachine } from 'Machines/countdown/countdown';

type GameContainerProps = {
  state: GameState;
  dispatcher: (event: GameMachineEvent) => void;
};

const GameContainer: React.FunctionComponent<GameContainerProps> = (
  props,
) => {
  const { state, dispatcher } = props;

  /* @Hooks */
  const [countdownState, sendCountdownActions] = useMachine(
    countdownMachine,
    {
      actions: {
        countdownEnd: () => {
          dispatcher({
            type: 'PLAY',
          });
        },
      },
    },
  );

  useEffect(() => {
    sendCountdownActions({
      type: 'START',
    });
  }, [sendCountdownActions]);

  /* Values */
  const {
    cards,
    roundMatch,
    openCards,
    forceOpenedCards,
    attempts,
  } = state.context;
  const openedCards: CardImprint[] = Array.from(
    new Set([...roundMatch, ...openCards]),
  );

  /* @Handlers */
  const handleClick = (cardImprint: CardImprint) => {
    dispatcher({
      type: 'MATCH',
      cardImprint,
    });
  };

  return (
    <GameComponent
      cards={cards}
      openedCards={openedCards}
      handleClick={handleClick}
      forceOpenedCards={forceOpenedCards}
      attempts={attempts}
      countdownTime={countdownState.context.timer}
      isCountdownEnd={countdownState.matches('end')}
    />
  );
};

export { GameContainer };
