import {EtcIcon} from "../../icon/icon.model";

export interface FormFieldDropdownOptionModel<VALUE = unknown> {
    label?: string,
    value?: VALUE,
    icon?: EtcIcon,
    disabled?: boolean,
}
