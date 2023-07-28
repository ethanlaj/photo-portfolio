import React from "react";
import { Photo } from "../types/Photo";

const PhotoContext = React.createContext<Photo[] | undefined>(undefined);

export default PhotoContext;
