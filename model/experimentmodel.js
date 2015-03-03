/**
 * Created by mueller on 03/03/15.
 */
var mongoose = require('mongoose')

Schema = mongoose.Schema;

var model =
{
    ds_name: String,
    outlier_name: String,
    pre_pro_name: String,
    separated: Boolean,
    macro_result: {
        precision: {type: Number},
        recall: {type: Number},
        fmeasure: {type: Number}
    },
    micro_result: {
        precision: {type: Number},
        recall: {type: Number},
        fmeasure: {type: Number}
    },
    tp: Number,
    fp: Number,
    fn: Number,
    parameters: Schema.Types.Mixed,
    threshold: Schema.Types.Mixed,
    time_stamp: { type: Date, default: Date.now }
};

module.exports = mongoose.model('Experiment', model);