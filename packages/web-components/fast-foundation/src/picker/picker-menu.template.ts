import {
    children,
    elements,
    html,
    ref,
    slotted,
    ViewTemplate,
    when,
} from "@microsoft/fast-element";
import { PickerMenu } from "./picker-menu";

/**
 * The template for the List Picker component.
 * @public
 */
export function createPickerMenuTemplate(prefix: string): ViewTemplate {
    return html<PickerMenu>`
        <template role="list" aria-label="choose a recipient">
            <div
                class="header-region"
                part="header-region"
                role="list"
                aria-label="header region"
            >
                <slot name="header-region" ${slotted("headerElements")}></slot>
            </div>

            <slot ${slotted("menuElements")}></slot>

            <div
                class="footer-region"
                part="footer-region"
                role="list"
                aria-label="footer region"
            >
                <slot name="footer-region" ${slotted("footerElements")}></slot>
            </div>
        </template>
    `;
}