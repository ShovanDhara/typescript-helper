/*
Here trying to unwrap the variable  with proper type based on the ID param. So that you get propper autocompletion against
passed ID
*/

import React from "react"

const messages = {
  en: {
    GREETING: "Hello {name}",
    INTRO: "My name is {name} & I'm {age} years old",
    HEADER: "Typesafe react-int is {is}",
    SOMETHING: "Hello {world}",
  },
  fr: {
    GREETING: "Hello {name}",
    INTRO: "My name is {name} & I'm {age} years old",
    HEADER: "Typesafe react-int is {is}",
    SOMETHING: "Hello {world}",
  },
} as const;

type Messages = typeof messages["en"]

type GetExpression<T extends string> =
  T extends `${string}{${infer Ident}}${infer Rest}`
  ? Ident | GetExpression<Rest>
  : never

type K = GetExpression<"Hello {name} {nice}">

type FormattedMessageProps<Id extends keyof Messages> = {
  id: Id
  values: Record<GetExpression<Messages[Id]>, string>
}
const FormattedMessage = <Id extends keyof Messages>(
  props: FormattedMessageProps<Id>
) => {
  return null
}

export const messageComponent = () => {
  return (
    <div>
      <FormattedMessage id="GREETING" values={{ name: "nice" }}></FormattedMessage>
      <FormattedMessage id="HEADER" values={{ is: "Cool" }} />
      <FormattedMessage id="INTRO" values={{ age: "", name: "" }} />
      <FormattedMessage id="INTRO" values={{}} />
      <FormattedMessage id="SOMETHING" values={{ world: "world" }} />
    </div>
  )
}
