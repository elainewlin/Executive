import { createSelector } from 'reselect';

const selectReminderPageDomain = () => (state) => state.get('ReminderPage');

const selectEmailStatus = () => createSelector(
  selectReminderPageDomain(),
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
