/**
 * Created by s141689 on 4-1-2016.
 */
import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const KeywordSchema = new Schema ({
    name: String,
    amountSearched: {type: Number, default: 0}
});

export default mongoose.model("Keyword", KeywordSchema);
