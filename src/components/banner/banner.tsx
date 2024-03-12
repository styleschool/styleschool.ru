import { memo } from "react";
import Cards from "./cards";
import Stepper from "./stepper";
import Gallery from "./gallery";
import ImageBanner from "./image";
import Recommendations from "./recommendations";

export default memo(function Banner(props: any) {
    const { type, ...data } = props;
    return(<>
        { type === 'image' ? <ImageBanner {...data} /> : null }
        { type === 'cards' ? <Cards {...data} /> : null }
        { type === 'stepper' ? <Stepper {...data} /> : null }
        { type === 'gallery' ? <Gallery {...data} /> : null }
        { type === 'recommendations' ? <Recommendations {...data} /> : null }
    </>);
  })
  