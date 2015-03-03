/**
 * Created by mueller on 03/03/15.
 */
module.exports = {
    "ds_name":"conference",
    "outlier_name":"loop",
    "pre_pro_name":"remove_corr",
    "separated":true,
    "macro_result": {
        "precision":0.6,
        "recall":0.6,
        "fmeasure":0.6},
    "micro_result": {
        "precision":0.6,
        "recall":0.6,
        "fmeasure":0.6},
    "tp":10,
    "fp":10,
    "fn":10,
    "parameters":{"alpha":0.0,"test":0.1,"fuzyy":0.3},
    "threshold":{"classes":0.1,"dp":0.3,"op":0.3}
}