import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { LandingSectionEnum } from "../enums";

export interface LandingState {
  activeSection: LandingSectionEnum;
  revealedSections: LandingSectionEnum[];
}

const initialState: LandingState = {
  activeSection: LandingSectionEnum.Showcase,
  revealedSections: [],
};

export const landingSlice = createSlice({
  name: "landing",
  initialState,
  reducers: {
    changeActiveSection: (state, action: PayloadAction<LandingSectionEnum>) => {
      state.activeSection = action.payload;
    },
    changeRevealedSections: (
      state,
      action: PayloadAction<LandingSectionEnum[]>
    ) => {
      state.revealedSections = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeActiveSection, changeRevealedSections } =
  landingSlice.actions;

export default landingSlice.reducer;
