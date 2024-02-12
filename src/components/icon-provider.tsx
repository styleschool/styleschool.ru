import { IconContext } from "react-icons";

export const IconProvider = ({
  icon,
  color = "black",
  size = "0.9rem",
  title,
}:{
  icon: any;
  color?: string;
  size?: string;
  title?: string;
}) => {
  return (
    <IconContext.Provider value={{ 
      color: color, size: size, 
      // @ts-ignore
      title: title, attr: { role: "img" } }}
    >
      <div>
        {icon}
      </div>
    </IconContext.Provider>
  );
}