import { newAttribute, newMeasure, IAttribute, IMeasure, IMeasureDefinition } from "@gooddata/sdk-model";
//geo pushpin too large
export const g_Latlon1 = newAttribute("label.geopushpintoolarge.latlon");

//geo pushpin
export const PopulationSum: IMeasure<IMeasureDefinition> = newMeasure("aacK5iL5gY5t");
export const PopulationMin: IMeasure<IMeasureDefinition> = newMeasure("aadK4OCEgY7L");
export const Location0 = {
    Zip: newAttribute("label.geopushpin.zip"),
    Timezone: newAttribute("label.geopushpin.timezone"),
    City: newAttribute("label.geopushpin.city"),
    State: newAttribute("label.geopushpin.state"),
    LatlonName: newAttribute("label.geopushpin.latlon"),
    Location: newAttribute("label.geopushpin.location"),
    DST: newAttribute("label.geopushpin.dst")
  };


//metric
export const m_ActivityRestricted = {Sum: newMeasure("dt.activity.activity", m => m.aggregation("sum"))};
export const m_MinPaid = {Min: newMeasure("fact.persons.paid", m => m.aggregation("min"))};
export const m_SumSalary = {Sum: newMeasure("fact.persons.salary", m => m.aggregation("sum"))};
export const m_OppFirstSnapshot : IMeasure<IMeasureDefinition> = newMeasure("anwcdHC0aJK1");
export const m_SnapshotEOP : IMeasure<IMeasureDefinition> = newMeasure("aa5EuXigaJAx");
export const m_OpenOpps : IMeasure<IMeasureDefinition> = newMeasure("aaYh6Voua2yj");
export const m_CountStageHistory = {Count: newMeasure("attr.stagehistory.id", m => m.aggregation("count"))};
export const m_Amount : IMeasure<IMeasureDefinition> = newMeasure("ah1EuQxwaCqs");
export const m_Amount1 : IMeasure<IMeasureDefinition> = newMeasure("ah1EuQxwaCqs");
export const m_Amount2 : IMeasure<IMeasureDefinition> = newMeasure("ah1EuQxwaCqs");
export const m_AmountNegative : IMeasure<IMeasureDefinition> = newMeasure("aabHMSWTaUSZ");
export const m_ClosedEOP : IMeasure<IMeasureDefinition> = newMeasure("aazb6kroa3iC");
export const m_ClosedBOP : IMeasure<IMeasureDefinition> = newMeasure("aaeb7jTCfexV");
export const m_CountProduct= {Count: newMeasure("attr.product.id", m => m.aggregation("count"))};
export const m_MinAmount =  {Min: newMeasure("fact.opportunitysnapshot.amount", m => m.aggregation("min"))};
export const m_SnapshotBOP : IMeasure<IMeasureDefinition> = newMeasure("aazV2yX2gz2z");
export const m_AmountBOP : IMeasure<IMeasureDefinition> = newMeasure("aagV61RmaPTt");
export const m_AvgAmount : IMeasure<IMeasureDefinition> = newMeasure("aoJqpe5Ib4mO");
export const m_AvgWon : IMeasure<IMeasureDefinition> = newMeasure("agEEuYDOefRs");
export const m_SumDayToClose= {Sum: newMeasure("fact.opportunitysnapshot.daystoclose", m => m.aggregation("sum"))};

//attribute
export const a_Account = newAttribute("label.account.id.name");
export const a_Activity = newAttribute("label.activity.id.subject");
export const a_Product = newAttribute("label.product.id.name");
export const a_StageName = newAttribute("label.stage.name.stagename");
export const a_Department = newAttribute("label.owner.department");
export const a_FirstName = newAttribute("label.persons.firstname");
export const a_Lastname = newAttribute("label.persons.lastname");
export const a_Address = newAttribute("label.persons.address");
export const a_StartFrom = newAttribute("startfrom.aag81lMifn6q");
export const a_YearClosed = newAttribute("closed.aag81lMifn6q");
export const a_YearSnapshot = newAttribute("snapshot.aag81lMifn6q");
export const a_OppSnapshot = newAttribute("label.opportunitysnapshot.id");
//Set protected attribute
export const a_Opportunity = newAttribute("label.opportunity.id.name");
//Set masked for attribute
export const a_Priority = newAttribute("label.activity.priority");

//insight
export const Insights = {
  InsightView1: "aab5xG7LbGTX",
  InsightView2: "aar56a8uhxpm",
  InsightView3: "aakaPfbuh8Sg",
  InsightView4: "aaf5x7MQbPrm",
  InsightView5: "aak6elxNavNy",
  ColumnChart: "aabby915eLSZ",
  AlignPieDonutChart1 : "aaeBD4gMeSc0",
  AlignPieDonutChart2 : "aabBE0y2dt4j",
  AlignPieDonutChart3 : "aahBCA8deD4c",
  AlignPieDonutChart4 : "aagBD5grdqDP",
  AlignPieDonutChart5 : "aaiBMt3meK1b",
  AlignPieDonutChart6 : "aawCYDB3huZx",
  AlignPieDonutChart7 : "aabIPdZufDRl",
  AreaChart1: "aafbzXk7eRXw",
  AxisNameandPosition1: "aaeGiWByc7kl",
  AxisNameandPosition2: "aacGkrpldnOi",
  BulletChart1: "aaHgHv4Zf0gO",
  BulletChart2: "aaktgblRcSAZ",
  BulletChart3: "acFy4qNMbyOS",
  GeoChart1: "aaSc2ulWdbHf",
  GeoChart2: "aaiXFzYnfuDp",
  GeoChart3: "aabfiMtLeZGC",
  GeoChart4: "aadfkyQZgXcx",
  GeoChart5: "aabMcl9oaEHj",
  GeoChart6: "aaerv5m0iy8m",
  GeoChart7: "aadUg2hJghFC",
  GeoChart8: "aabBJ3S0cEN5",
  BarChart: "aahbxqbOcWA7",
  sd1045:"aaqslh5gfSPu"
};
