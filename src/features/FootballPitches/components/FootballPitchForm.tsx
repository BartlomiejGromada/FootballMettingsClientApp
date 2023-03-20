import { StyledTextField } from "@components/mui";
import { yupResolver } from "@hookform/resolvers/yup";
import { AddIcCallOutlined, PhotoCamera } from "@mui/icons-material";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  Button,
  CircularProgress,
  Grid,
  IconButton,
  Tooltip,
} from "@mui/material";
import { protectedPagesPathes } from "@routes/protectedPages";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useSnackbar } from "notistack";
import { useRef, useState } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { object, string } from "yup";
import { addFootballPitch } from "../api";
import { FootballPitchFormProps } from "../types/footballPitchFormProps";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";
import SendIcon from "@mui/icons-material/Send";

const schema = object<FootballPitchFormProps>({
  name: string().required("Field required"),
  city: string().required("Field required"),
});

function FootballPitchForm() {
  const formMethods = useForm<FootballPitchFormProps>({
    mode: "onTouched",
    resolver: yupResolver(schema),
  });

  const queryClient = useQueryClient();

  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: (data: FootballPitchFormProps) => {
      const formData = new FormData();
      formData.append("data", JSON.stringify(data));
      if (image) formData.append("image", image);

      return addFootballPitch(formData);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["football-pitches"] });
      navigate(protectedPagesPathes.FootballPitchesPagePath);
    },
  });

  const onSubmitHandler: SubmitHandler<FootballPitchFormProps> = async (
    data
  ) => {
    try {
      await mutation.mutateAsync(data);
    } catch (err) {
      enqueueSnackbar((err as Error)?.message, { variant: "error" });
    }
  };

  const [image, setImage] = useState<File | undefined>();
  const imageInputRef = useRef<HTMLInputElement>(null);

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

          <Grid container marginTop={1} gap={2} flexDirection="column">
            <Grid item>
              <input
                ref={imageInputRef}
                accept="image/*"
                style={{ display: "none" }}
                id="raised-button-file"
                type="file"
                onChange={(e) => setImage(e.target.files![0])}
              />
              <label htmlFor="raised-button-file">
                <Button
                  variant="text"
                  component="span"
                  startIcon={<PhotoCamera />}
                >
                  Upload
                </Button>
              </label>
            </Grid>

            {image && (
              <Grid item>
                <img
                  src={URL.createObjectURL(image)}
                  style={{ width: 300, height: 200, borderRadius: 8 }}
                />
                <Tooltip title="Delete">
                  <IconButton
                    onClick={(e) => {
                      if (imageInputRef.current)
                        imageInputRef.current.value = "";
                      setImage(undefined);
                    }}
                    sx={{
                      position: "relative",
                      top: -25,
                      left: -290,
                      background: "white",
                      "&:hover": {
                        background: "white",
                        opacity: "90%",
                      },
                    }}
                  >
                    <DeleteIcon
                      sx={{ background: "white" }}
                      htmlColor="black"
                    />
                  </IconButton>
                </Tooltip>
              </Grid>
            )}
          </Grid>

          <Grid container gap={2} marginTop={2}>
            <Button
              type="submit"
              color="secondary"
              startIcon={
                mutation.isLoading ? (
                  <CircularProgress color="secondary" size={20} />
                ) : (
                  <CheckIcon />
                )
              }
              disabled={!formMethods.formState.isValid || mutation.isLoading}
            >
              Add
            </Button>
            <Button
              startIcon={<ClearIcon />}
              onClick={() =>
                navigate(protectedPagesPathes.FootballPitchesPagePath)
              }
              color="secondary"
              variant="outlined"
            >
              Cancel
            </Button>
          </Grid>
        </Grid>
      </form>
    </FormProvider>
  );
}
export { FootballPitchForm };
