const express = require('express');
const router = express.Router();

const { getDashboardCardDetails, getTotalArticleYearwise,
    getCountryWiseTraffic,
    getRegionDetails,
    popularRegionRelevancy,
    comboChartComparisonTopSources,
    popularCompanyPerformance,
    popularSectorIntensity,
    popularSectorRatio,
    popularSectorRelevancy,
    popularSectors,
    recentSourcesTableData,
    popularRegionRatio,
    fetchArticles,
    popularTopics
} = require('../controllers/dataController')


//api to get all the data

router.route("/dashboard").get(getDashboardCardDetails);

router.route("/totalArticleYearWise").get(getTotalArticleYearwise);

router.route("/getCountryWiseTraffic").get(getCountryWiseTraffic);

router.route("/getRegionDetails").get(getRegionDetails);

router.route("/popularRegionRelevancy").get(popularRegionRelevancy);

router.route("/topSourcesComparison").get(comboChartComparisonTopSources);

router.route("/popularCompanyPerformance").get(popularCompanyPerformance);

router.route("/popularSectorIntensity").get(popularSectorIntensity);

router.route("/popularSectorRelevancy").get(popularSectorRelevancy);

router.route("/popularSectorRatio").get(popularSectorRatio);

router.route("/popularRegionRatio").get(popularRegionRatio);

router.route("/popularSectors").get(popularSectors);

router.route("/recentSourcesTableData").get(recentSourcesTableData);

router.route("/fetchArticles").post (fetchArticles);

router.route("/popularTopics").get (popularTopics);

module.exports = router;