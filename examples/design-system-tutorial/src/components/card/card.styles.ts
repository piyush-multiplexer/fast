import {
    controlCornerRadius,
    designUnit,
    fillColor,
    neutralForegroundRest,
    typeRampMinus1FontSize,
    typeRampMinus1LineHeight,
    typeRampPlus1FontSize,
    typeRampPlus1LineHeight,
    elevation,
} from "@fluentui/web-components";
import { css } from "@microsoft/fast-element";
import { DesignToken, display } from "@microsoft/fast-foundation";

/**
 * Not only can we have system-wide design tokens, but we can
 * have component-specific tokens as well. This token enables
 * changing the corner radius of cards independently of other controls.
 * However, by default it aliases to the controlCornerRadius token.
 */
export const cardCornerRadius = DesignToken.create<number>(
    "card-corner-radius"
).withDefault(controlCornerRadius);

export const demoCardStyles = css`
    ${display("grid")} :host {
        --elevation: 4;
        grid-template-rows: calc(${designUnit} * 39px) 1fr auto calc(${designUnit} * 2px);
        background-color: ${fillColor};
        width: calc(${designUnit} * 75px);
        height: calc(${designUnit} * 76px);
        border-radius: calc(${cardCornerRadius} * 1px);
        contain: content;
        margin: calc(${designUnit} * 2px);
        ${elevation}
    }

    .feature-image {
        overflow: hidden;
    }

    .feature-image ::slotted(img) {
        place-self: stretch;
        width: 100%;
        position: relative;
        top: 50%;
        transform: translateY(-50%);
    }

    .content,
    .footer {
        padding: 0 calc(${designUnit} * 2px);
    }

    slot[name="heading"]::slotted(*) {
        color: ${neutralForegroundRest};
        font-size: ${typeRampPlus1FontSize};
        line-height: ${typeRampPlus1LineHeight};
        font-weight: 400;
        overflow: hidden;
        max-height: calc(${typeRampPlus1LineHeight} * 2);
    }

    fluent-button::part(control) {
        transition: padding 0.2s ease-in-out;
    }

    fluent-button:not(:hover)::part(control) {
        padding: 0;
    }

    ::slotted(fluent-attribution) {
        margin-top: calc(${designUnit} * 2px);
        font-size: ${typeRampMinus1FontSize};
        line-height: ${typeRampMinus1LineHeight};
    }
`;