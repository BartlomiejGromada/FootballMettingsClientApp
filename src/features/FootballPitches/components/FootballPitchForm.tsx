import { StyledTextField } from "@components/mui";
import { yupResolver } from "@hookform/resolvers/yup";
import { PhotoCamera } from "@mui/icons-material";
import { Button, Grid } from "@mui/material";
import { useSnackbar } from "notistack";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { object, string } from "yup";
import { FootballPitchFormProps } from "../types/footballPitchFormProps";

const schema = object<FootballPitchFormProps>({
  name: string().required("Field required"),
  city: string().required("Field required"),
});

function FootballPitchForm() {
  const formMethods = useForm<FootballPitchFormProps>({
    mode: "onTouched",
    resolver: yupResolver(schema),
  });

  const { enqueueSnackbar } = useSnackbar();

  const onSubmitHandler: SubmitHandler<FootballPitchFormProps> = async (
    data
  ) => {
    try {
      //   await mutation.mutateAsync(data);
    } catch (err) {
      enqueueSnackbar((err as Error)?.message, { variant: "error" });
    }
  };

  return (
    <FormProvider {...formMethods}>
      <form
        noValidate
        onSubmit={formMethods.handleSubmit(onSubmitHandler)}
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
        }}
      >
        <Grid container direction="column" gap={1}>
          <StyledTextField name={"name"} label={"Name"} />
          <StyledTextField name={"city"} label={"City"} />
          <StyledTextField name={"street"} label={"Street"} />
          <StyledTextField name={"streetNumber"} label={"Street number"} />

          <Grid item marginTop={1}>
            <input
              accept="image/*"
              style={{ display: "none" }}
              id="raised-button-file"
              multiple
              type="file"
            />
            <label htmlFor="raised-button-file">
              <Button
                variant="contained"
                component="span"
                color="secondary"
                startIcon={<PhotoCamera />}
              >
                Upload
              </Button>
            </label>
          </Grid>
        </Grid>
      </form>
    </FormProvider>
  );
}
export { FootballPitchForm };
