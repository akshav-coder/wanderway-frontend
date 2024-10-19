import * as React from "react";
import { extendTheme, styled } from "@mui/material/styles";
import { Image, Map, Luggage } from "@mui/icons-material";
import LayersIcon from "@mui/icons-material/Layers";
import { AppProvider, Navigation, Router } from "@toolpad/core/AppProvider";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import { PageContainer } from "@toolpad/core/PageContainer";
import Grid from "@mui/material/Grid2";
import logo from "../../assets/travel_logo.png";

const NAVIGATION: Navigation = [
  {
    kind: "header",
    title: "Analytics",
  },
  {
    segment: "post",
    title: "Post",
    icon: <Image />,
  },
  {
    segment: "travelmaps",
    title: "Travel Maps",
    icon: <Map />,
  },
  {
    segment: "travelplanner",
    title: "Travel planner",
    icon: <Luggage />,
  },
  {
    segment: "hotelbooking",
    title: "Hotel booking",
    icon: <LayersIcon />,
  },
  {
    segment: "travelbooking",
    title: "Travel booking",
    icon: <LayersIcon />,
  },
  {
    segment: "travelexplore",
    title: "Travel explore",
    icon: <LayersIcon />,
  },
];

const demoTheme = extendTheme({
  colorSchemes: { light: true, dark: true },
  colorSchemeSelector: "class",
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});

function useDemoRouter(initialPath: string): Router {
  const [pathname, setPathname] = React.useState(initialPath);

  return {
    pathname,
    searchParams: new URLSearchParams(),
    navigate: (path: string | URL) => setPathname(String(path)),
  };
}

const Skeleton = styled("div")<{ height: number }>(({ theme, height }) => ({
  backgroundColor: theme.palette.action.hover,
  borderRadius: theme.shape.borderRadius,
  height,
  content: '" "',
}));

export default function DashboardLayoutBasic(props: any) {
  const { window } = props;

  const router = useDemoRouter("/dashboard");

  // Remove this const when copying and pasting into your project.
  const demoWindow = window ? window() : undefined;

  return (
    <AppProvider
      navigation={NAVIGATION}
      branding={{
        logo: <img src={logo} alt="MUI logo" />,
        title: "MUI",
      }}
      router={router}
      theme={demoTheme}
      window={demoWindow}
    >
      <DashboardLayout>
        <PageContainer>
          <Grid container spacing={1}>
            <Grid size={5} />
            <Grid size={12}>
              <Skeleton height={14} />
            </Grid>
            <Grid size={12}>
              <Skeleton height={14} />
            </Grid>
            <Grid size={4}>
              <Skeleton height={100} />
            </Grid>
            <Grid size={8}>
              <Skeleton height={100} />
            </Grid>

            <Grid size={12}>
              <Skeleton height={150} />
            </Grid>
            <Grid size={12}>
              <Skeleton height={14} />
            </Grid>

            <Grid size={3}>
              <Skeleton height={100} />
            </Grid>
            <Grid size={3}>
              <Skeleton height={100} />
            </Grid>
            <Grid size={3}>
              <Skeleton height={100} />
            </Grid>
            <Grid size={3}>
              <Skeleton height={100} />
            </Grid>
          </Grid>
        </PageContainer>
      </DashboardLayout>
    </AppProvider>
  );
}
