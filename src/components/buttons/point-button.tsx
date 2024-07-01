import { memo } from "react";
import CircleButton from "./circle-button";


export default memo(function PointButton(props: any) {
    const { type, ...data } = props;

    return(<>
        { type === 'circle' ? <CircleButton {...data} /> : null }
    
        </>);
  })
  