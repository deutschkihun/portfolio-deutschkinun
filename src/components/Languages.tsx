import React, { useState } from "react";
import { FormattedMessage } from "react-intl";
import { LanguagesContainer, LanguageMessage } from "../helper/lib/Languages";

export const Languages = () => {
  const [locale, setLocale] = useState(localStorage.getItem("locale") ?? "kr");

  return (
    <>
      <LanguageMessage>
        <FormattedMessage
          id="info"
          values={{
            locale:
              localStorage.getItem("locale") === "kr" ? "한국어" : "English",
          }}
        />
      </LanguageMessage>
      <LanguagesContainer
        onSubmit={() => localStorage.setItem("locale", locale)}
      >
        <button>
          <FormattedMessage id="button" />
        </button>
        <select
          id="locale"
          value={locale}
          onChange={({ target: { value } }) => setLocale(value)}
        >
          <option value="kr">한국어</option>
          <option value="en">English</option>
        </select>
      </LanguagesContainer>
    </>
  );
};
