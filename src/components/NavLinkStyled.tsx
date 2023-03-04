import { NavLink } from "react-router-dom";

interface NavLinkStyledProps {
  to: string;
  children: React.ReactNode;
}

const activeLinkStyle = {
  //   color: "#68b36b",
};

function NavLinkStyled(props: NavLinkStyledProps) {
  const { to, children } = props;

  return (
    <NavLink
      to={to}
      style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}
    >
      {children}
    </NavLink>
  );
}

export { NavLinkStyled };
