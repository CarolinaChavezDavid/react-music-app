import { AppBar, Container, styled } from "@mui/material";
import { common } from "@mui/material/colors";
import { Logo } from "./Logo";

const CustomHeader = styled(AppBar)(({ theme }) => ({
  color: common.black,
  backgroundColor: "#121640",
  left: 0,
  boxShadow: "0 2px 4px 0 rgba(176,176,176,0.5)",
  zIndex: theme.zIndex.modal,
}));

export const TopNavigation = () => {
  return (
    <CustomHeader>
      <Container maxWidth="xl" component="nav">
        <Logo />
      </Container>
    </CustomHeader>
  );
};
