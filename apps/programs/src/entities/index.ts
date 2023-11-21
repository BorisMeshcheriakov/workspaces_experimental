import { useAppDispatch } from '@redux/store';

import { programsActions } from '@redux/state-programs';

export const usePrograms = () => {
  const dispatch = useAppDispatch();
  const addProgram = () => dispatch(programsActions.programAdd({ id: 1 }));

  return {
    addProgram,
  };
};
