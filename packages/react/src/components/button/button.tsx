"use client"

import { forwardRef, useMemo } from "react"
import {
  type HTMLChakraProps,
  type RecipeProps,
  type UnstyledProp,
  chakra,
  createRecipeContext,
} from "../../styled-system"
import { compact, cx } from "../../utils"
import { Loader } from "../loader"

const { useRecipeResult, PropsProvider, usePropsContext } = createRecipeContext(
  { key: "button" },
)

export interface ButtonLoadingProps {
  /**
   * If `true`, the button will show a loading spinner.
   * @default false
   */
  loading?: boolean
  /**
   * The text to show while loading.
   */
  loadingText?: React.ReactNode
  /**
   * The spinner to show while loading.
   */
  spinner?: React.ReactNode
}

export interface ButtonBaseProps
  extends RecipeProps<"button">,
    UnstyledProp,
    ButtonLoadingProps {}

export interface ButtonProps
  extends HTMLChakraProps<"button", ButtonBaseProps> {}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(inProps, ref) {
    const propsContext = usePropsContext()
    const props = useMemo(
      () => ({ ...propsContext, ...compact(inProps) }),
      [propsContext, inProps],
    )
    const result = useRecipeResult(props)
    const { loading, loadingText, children, spinner, ...rest } = result.props
    return (
      <chakra.button
        type="button"
        ref={ref}
        {...rest}
        className={cx(result.className, props.className)}
        css={[result.styles, props.css]}
      >
        {!props.asChild && loading ? (
          <Loader spinner={spinner} text={loadingText}>
            {children}
          </Loader>
        ) : (
          children
        )}
      </chakra.button>
    )
  },
)

export const ButtonPropsProvider =
  PropsProvider as React.Provider<ButtonBaseProps>
