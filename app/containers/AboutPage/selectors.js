import { createSelector } from 'reselect';

const selectAboutPageDomain = () => (state) => state.get('AboutPage');

const selectEmailStatus = () => createSelector(
  selectAboutPageDomain(),
  (aboutPageDomain) => aboutPageDomain.get('emailStatus')
);

const selectFormDomain = () => (state) => state.get('form');

const selectEmail = () => createSelector(
  selectFormDomain(),
  (formDomain) => formDomain.EmailForm.values
);

export {
  selectEmailStatus,
  selectEmail,
};
