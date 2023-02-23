import { Suspense, useEffect } from "react";
import { I18nextProvider } from "react-i18next";
import { Story, StoryContext } from "@storybook/react";
import { i18n } from "i18next";

export const I18nDecorator =
  (i18n: i18n) => (Story: Story, context: StoryContext) => {
    const { locale } = context.globals;

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      i18n.changeLanguage(locale);
    }, [locale]);

    return (
      <Suspense fallback={<div>loading translations...</div>}>
        <I18nextProvider i18n={i18n}>
          <Story />
        </I18nextProvider>
      </Suspense>
    );
  };
