import { memo } from "react";
import Gallery from "./gallery";
import Stepper from "./stepper"

export default memo(function Banner(props: any) {
    const { type, ...data } = props;
    return(<>
        { type === 'gallery' ? < Gallery {...data} /> : null }
        { type === 'stepper' ? < Stepper {...data} /> : null }
    </>);
  })
  