import BlogSchema from "./blogs";
import PortfolioSchema from "./portfolio";
import mongoose from "mongoose";

// Modelos para Trenza Fotos
export const TrenzaMatrimoniosBlogsModel =
    mongoose.models.TrenzaMatrimoniosBlogs ||
    mongoose.model("TrenzaMatrimoniosBlogs", BlogSchema);

export const TrenzaMatrimoniosPortfolioModel =
    mongoose.models.TrenzaMatrimoniosPortfolio ||
    mongoose.model("TrenzaMatrimoniosPortfolio", PortfolioSchema);
