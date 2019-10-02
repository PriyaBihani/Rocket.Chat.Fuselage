import React, { useLayoutEffect, useRef } from 'react';
import styled, { css } from 'styled-components';

import { calc, extendClassName } from '../../helpers';
import { useMergedRefs } from '../../hooks/useMergedRefs';
import {
  normalized,
  clickable,
  visuallyHidden,
  withBorder,
  withButtonActionColors,
  whenIE11,
  whenDisabled,
} from '../../mixins';
import { Label } from '../Label';
import {
  size,
  border,
  uncheckedColors,
  checkedColors,
  indeterminateColors,
  icon,
} from './theme';


const Container = styled(Label)`
  ${ clickable }
`;

const Input = styled.input`
  ${ visuallyHidden }
`;

const withUncheckedColors = withButtonActionColors(uncheckedColors, Input, '+ &');
const withCheckedColors = withButtonActionColors(checkedColors, css`${ Input }:checked`, '+ &');
const withIndeterminateColors = withButtonActionColors(indeterminateColors, css`${ Input }:indeterminate`, '+ &');

const withIcon = css`
  &::before,
  &::after {
    content: '';

    position: absolute;
    left: 50%;
    top: 50%;

    display: block;

    opacity: 0;
    transform: translate(-50%, -50%);
    visibility: hidden;

    background-color: currentColor;
  }
`;

const withCheckedIcon = css`
  ${ withIcon }

  &::before,
  &::after {
    border-radius: ${ icon.smoothness };
    opacity: 1;
    visibility: visible;
  }

  &::before {
    width: calc(${ icon.size } * ${ size });
    height: ${ icon.thickness };

    ${ whenIE11(css`
      transform:
        translate(-50%, -50%)
        translateX(${ calc((iconSize, size) => iconSize * size / -3, [icon.size, size]) })
        translateY(${ calc((iconSize, size) => iconSize * size / 6, [icon.size, size]) })
        rotate(-45deg)
        translateX(${ calc((iconSize, size) => iconSize * size / 2, [icon.size, size]) })
        translateY(${ calc((iconSize, size) => iconSize * size / 6, [icon.size, size]) });
    `) }
    transform:
      translate(-50%, -50%)
      translate(calc(${ icon.size } * ${ size } / -3), calc(${ icon.size } * ${ size } / 6))
      rotate(-45deg)
      translate(calc(${ icon.size } * ${ size } / 2), calc(${ icon.size } * ${ size } / 6));
  }

  &::after {
    width: ${ icon.thickness };
    height: calc(0.5 * ${ icon.size } * ${ size });

    ${ whenIE11(css`
      transform:
        translate(-50%, -50%)
        translateX(${ calc((iconSize, size) => iconSize * size / -3, [icon.size, size]) })
        translateY(${ calc((iconSize, size) => iconSize * size / 6, [icon.size, size]) })
        rotate(-45deg);
    `) }
    transform:
      translate(-50%, -50%)
      translate(calc(${ icon.size } * ${ size } / -3), calc(${ icon.size } * ${ size } / 6))
      rotate(-45deg);
  }
`;

const withIndeterminateIcon = css`
  ${ withIcon }

  &::before {
    width: calc(${ icon.size } * ${ size });
    height: ${ icon.thickness };

    border-radius: ${ icon.smoothness };
    opacity: 1;
    visibility: visible;
  }
`;

const Fake = styled.i`
  ${ normalized }

  position: relative;

  width: ${ size };
  height: ${ size };

  ${ withBorder(border) }

  ${ withUncheckedColors }
  ${ withCheckedColors }
  ${ withIndeterminateColors }

  ${ Input }:checked + & {
    ${ withCheckedIcon }
  }

  ${ Input }:indeterminate + & {
    ${ withIndeterminateIcon }
  }

  ${ whenDisabled(css`cursor: not-allowed;`, Input, '+ &') }
`;

export const CheckBox = styled(React.forwardRef(function CheckBox({
  className,
  hidden,
  indeterminate,
  invisible,
  onChange,
  ...props
}, ref) {
  const innerRef = useRef();
  const mergedRef = useMergedRefs(ref, innerRef);

  useLayoutEffect(() => {
    innerRef.current.indeterminate = indeterminate;
  }, [indeterminate]);

  return <Container
    className={extendClassName('check-box', className, {
      hidden,
      invisible,
      ...props,
    })}
    hidden={hidden}
    invisible={invisible}
  >
    <Input
      hidden={hidden}
      invisible={invisible}
      ref={mergedRef}
      type='checkbox'
      onChange={(event) => {
        innerRef.current.indeterminate = indeterminate;
        onChange && onChange.call(innerRef.current, event);
      }}
      {...props}
    />
    <Fake aria-hidden='true' />
  </Container>;
}))``;

CheckBox.displayName = 'CheckBox';