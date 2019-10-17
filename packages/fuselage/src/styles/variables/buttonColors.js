import colors from '@rocket.chat/fuselage-tokens/colors';

import { theme } from '../helpers';

export default {
  primary: {
    backgroundColor: theme('button-colors-primary-background-color', colors.blue500),
    borderColor: theme('button-colors-primary-border-color', colors.blue500),
    color: theme('button-colors-primary-color', colors.white),
    hoverBackgroundColor: theme('button-colors-primary-hover-background-color', colors.blue600),
    hoverBorderColor: theme('button-colors-primary-hover-border-color', colors.blue600),
    activeBackgroundColor: theme('button-colors-primary-active-background-color', colors.blue700),
    activeBorderColor: theme('button-colors-primary-active-border-color', colors.blue700),
    focusBackgroundColor: theme('button-colors-primary-focus-background-color', colors.blue500),
    focusBorderColor: theme('button-colors-primary-focus-border-color', colors.blue700),
    focusShadowColor: theme('button-colors-primary-focus-shadow-color', colors.blue100),
    disabledBackgroundColor: theme('button-colors-primary-disabled-background-color', colors.blue200),
    disabledBorderColor: theme('button-colors-primary-disabled-border-color', colors.blue200),
    disabledColor: theme('button-colors-primary-disabled-color', colors.white),
  },

  secondary: {
    backgroundColor: theme('button-colors-secondary-background-color', colors.dark300),
    borderColor: theme('button-colors-secondary-border-color', colors.dark300),
    color: theme('button-colors-secondary-color', colors.dark800),
    hoverBackgroundColor: theme('button-colors-secondary-hover-background-color', colors.dark400),
    hoverBorderColor: theme('button-colors-secondary-hover-border-color', colors.dark400),
    activeBackgroundColor: theme('button-colors-secondary-active-background-color', colors.dark500),
    activeBorderColor: theme('button-colors-secondary-active-border-color', colors.dark500),
    focusBackgroundColor: theme('button-colors-secondary-focus-background-color', colors.dark300),
    focusBorderColor: theme('button-colors-secondary-focus-border-color', colors.dark500),
    focusShadowColor: theme('button-colors-secondary-focus-shadow-color', colors.dark100),
    disabledBackgroundColor: theme('button-colors-secondary-disabled-background-color', colors.dark100),
    disabledBorderColor: theme('button-colors-secondary-disabled-border-color', colors.dark100),
    disabledColor: theme('button-colors-secondary-disabled-color', colors.dark400),
  },

  danger: {
    backgroundColor: theme('button-colors-danger-background-color', colors.red500),
    borderColor: theme('button-colors-danger-border-color', colors.red500),
    color: theme('button-colors-danger-color', colors.white),
    hoverBackgroundColor: theme('button-colors-danger-hover-background-color', colors.red600),
    hoverBorderColor: theme('button-colors-danger-hover-border-color', colors.red600),
    activeBackgroundColor: theme('button-colors-danger-active-background-color', colors.red700),
    activeBorderColor: theme('button-colors-danger-active-border-color', colors.red700),
    focusBackgroundColor: theme('button-colors-danger-focus-background-color', colors.red500),
    focusBorderColor: theme('button-colors-danger-focus-border-color', colors.red700),
    focusShadowColor: theme('button-colors-danger-focus-shadow-color', colors.red100),
    disabledBackgroundColor: theme('button-colors-danger-disabled-background-color', colors.red200),
    disabledBorderColor: theme('button-colors-danger-disabled-border-color', colors.red200),
    disabledColor: theme('button-colors-danger-disabled-color', colors.white),
  },

  empty: {
    backgroundColor: theme('button-colors-empty-background-color', colors.white),
    borderColor: theme('button-colors-empty-border-color', colors.dark400),
    color: theme('button-colors-empty-color', colors.white),
    hoverBackgroundColor: theme('button-colors-empty-hover-background-color', colors.white),
    hoverBorderColor: theme('button-colors-empty-hover-border-color', colors.dark500),
    activeBackgroundColor: theme('button-colors-empty-active-background-color', colors.white),
    activeBorderColor: theme('button-colors-empty-active-border-color', colors.dark600),
    focusBackgroundColor: theme('button-colors-empty-focus-background-color', colors.white),
    focusBorderColor: theme('button-colors-empty-focus-border-color', colors.blue500),
    focusShadowColor: theme('button-colors-empty-focus-shadow-color', colors.blue100),
    disabledBackgroundColor: theme('button-colors-empty-disabled-background-color', colors.dark200),
    disabledBorderColor: theme('button-colors-empty-disabled-border-color', colors.dark200),
    disabledColor: theme('button-colors-empty-disabled-color', colors.white),
  },

  off: {
    backgroundColor: theme('button-colors-off-background-color', colors.dark400),
    borderColor: theme('button-colors-off-border-color', colors.dark400),
    color: theme('button-colors-off-color', colors.white),
    hoverBackgroundColor: theme('button-colors-off-hover-background-color', colors.dark500),
    hoverBorderColor: theme('button-colors-off-hover-border-color', colors.dark500),
    activeBackgroundColor: theme('button-colors-off-active-background-color', colors.dark600),
    activeBorderColor: theme('button-colors-off-active-border-color', colors.dark600),
    focusBackgroundColor: theme('button-colors-off-focus-background-color', colors.dark500),
    focusBorderColor: theme('button-colors-off-focus-border-color', colors.blue500),
    focusShadowColor: theme('button-colors-off-focus-shadow-color', colors.blue100),
    disabledBackgroundColor: theme('button-colors-off-disabled-background-color', colors.dark400),
    disabledBorderColor: theme('button-colors-off-disabled-border-color', colors.dark400),
    disabledColor: theme('button-colors-off-disabled-color', colors.dark200),
  },
};