// (C) 2020 GoodData Corporation
import {
    modifyMeasure,
    newArithmeticMeasure,
    newMeasure,
    modifySimpleMeasure,
    modifyAttribute,
    IMeasureDefinition,
    IMeasure,
    newPreviousPeriodMeasure,
    newPopMeasure,
    newMeasureValueFilter
} from "@gooddata/sdk-model";
import { projectId as workspace } from "../constants";
import * as Ldm from "./full";

import { newPositiveAttributeFilter, newNegativeAttributeFilter, newAbsoluteDateFilter, newRelativeDateFilter, ITotal, attributeIdentifier, measureIdentifier, newAttributeSort, newMeasureSort,  }
from '@gooddata/sdk-model';

export const dateSnapshotDatasetIdentifier = "snapshot.dataset.dt";
export const dateClosedDatasetIdentifier = "closed.dataset.dt";
export const dateClosedYearIdentifier = "closed.year";
export const dateSnapshorYearIdentifier = "snapshot.year";

export const m_Amount  = modifyMeasure(Ldm.m_Amount, m =>
  m
      .localId("Amount")
);
export const m_AmountBOP  = modifyMeasure(Ldm.m_AmountBOP, m =>
    m
        .localId("m_AmountBOP")
  );
export const m_Amount1  = modifyMeasure(Ldm.m_Amount1, m =>
    m
        .localId("Amount1")
  );
export const m_AvgAmount  = modifyMeasure(Ldm.m_AvgAmount, m =>
    m
        .localId("AvgAmount")
  );
export const m_Amount2  = modifyMeasure(Ldm.m_Amount2, m =>
    m
        .localId("Amount2")
  );
export const m_MinAmount  = modifyMeasure(Ldm.m_MinAmount.Min, m =>
  m
      .localId("MinAmount")
);
export const m_AmountNullFormat  = modifyMeasure(Ldm.m_Amount, m =>
  m
      .localId("AmountNullFormat")
      .format("[=null]trống; #,##0.00;")
);
export const m_ClosedBOP  = modifyMeasure(Ldm.m_ClosedBOP, m =>
  m
      .localId("ClosedBOP")
);
export const m_SnapshotBOP  = modifyMeasure(Ldm.m_SnapshotBOP, m =>
    m
        .localId("SnapshotBOP")
  );
export const m_CountStageHistory  = modifyMeasure(Ldm.m_CountStageHistory.Count, m =>
    m
        .localId("CountStageHistory")
  );
export const m_OpenOpps  = modifyMeasure(Ldm.m_OpenOpps, m =>
    m
        .localId("OpenOpps")
  );
export const m_MinPaid  = modifyMeasure(Ldm.m_MinPaid.Min, m =>
    m
        .localId("MinPaid")
  );
  export const m_SumSalary  = modifyMeasure(Ldm.m_SumSalary.Sum, m =>
    m
        .localId("SumSalary")
  );
  export const m_SumDayToClose  = modifyMeasure(Ldm.m_SumDayToClose.Sum, m =>
    m
        .localId("SumDayToClose")
  );
  
// define some measure apply ratio
export const m_AmountRatio  = modifySimpleMeasure(Ldm.m_Amount, m =>
  m
      .localId("AmountRatio")
      .title("Amount_ratio show in %")
      .ratio()
);
export const m_SumDayToCloseRatio = modifySimpleMeasure(Ldm.m_SumDayToClose.Sum, m =>
  m
      .format('[>=100000][color=2190c0]█████ #,##0; [>=50000][color=2190c0]████░ #,##0; [>=30000][color=2190c0]███░░ #,##0; [>=20000][color=2190c0]██░░░ #,##0; [>=0][color=2190c0]█░░░░ #,##0; [=Null] No data;')
      .localId("SumDayToCloseRatio")
      .title("<button>Sum days to close</button>")
      .ratio()
);
export const m_CountStageHistoryRatio  = modifySimpleMeasure(Ldm.m_CountStageHistory.Count, m =>
  m
      .format('[>=100000][color=2190c0]█████ #,##0; [>=50000][color=2190c0]████░ #,##0; [>=30000][color=2190c0]███░░ #,##0; [>=20000][color=2190c0]██░░░ #,##0; [>=0][color=2190c0]█░░░░ #,##0; [=Null] No data;')
      .localId("CountStageHistoryWithRatio")
      .ratio()
);
export const m_SumPopulationRatio  = modifySimpleMeasure(Ldm.PopulationSum, m =>
  m
      .localId("Population[Sum] %")
      .ratio()
);
export const m_MinPopulationRatio   = modifySimpleMeasure(Ldm.PopulationMin, m =>
  m
     .localId("Population[Min] %")
      .ratio()
);

// define some arithmeticMeasure
export const m_Sum_ClosedBOP_SnapshotBOP = newArithmeticMeasure([m_ClosedBOP, m_SnapshotBOP], "sum");
export const m_Change_ClosedBOP_SnapshotBOP = newArithmeticMeasure([m_ClosedBOP, m_SnapshotBOP], "change");
export const m_Difference_ClosedBOP_SnapshotBOP = newArithmeticMeasure([m_ClosedBOP, m_SnapshotBOP], "difference");
export const m_Ratio_ClosedBOP_SnapshotBOP  = newArithmeticMeasure([m_ClosedBOP, m_SnapshotBOP], "ratio");
export const m_Multiplication_ClosedBOP_SnapshotBOP  = newArithmeticMeasure([m_ClosedBOP, m_SnapshotBOP], "multiplication");
export const m_changeOfOpenOppsAndCountStageHistory  = newArithmeticMeasure([m_CountStageHistory,m_OpenOpps], "change",
m => m.localId("changeOfOpenOppsAndCountStageHistory"));
export const m_ratioOfOpenOppsAndCountStageHistory  = newArithmeticMeasure([m_CountStageHistory,m_OpenOpps], "ratio");
export const m_Sum_SumPopulation  = newArithmeticMeasure([Ldm.PopulationSum, Ldm.PopulationSum], "sum");
export const m_Difference_SumPopulation   = newArithmeticMeasure([Ldm.PopulationSum, Ldm.PopulationSum], "difference");
export const m_Ratio_SumPopulation   = newArithmeticMeasure([Ldm.PopulationSum, Ldm.PopulationSum], "ratio");
export const m_Change_SumPopulation   = newArithmeticMeasure([Ldm.PopulationSum, Ldm.PopulationSum], "change");
export const m_Multiplication_SumPopulation   = newArithmeticMeasure([Ldm.PopulationSum, Ldm.PopulationSum], "multiplication");

//define some pop & previous measure
export const m_POP_SumDayToClose = newPopMeasure(
  m_SumDayToClose, dateClosedYearIdentifier,
  m => m.alias("POP SumDayToClose").localId("POP_SumDayToClose")
);
export const m_PP_SumDayToClose  = newPreviousPeriodMeasure(
    m_SumDayToClose,
  [{ dataSet: dateClosedDatasetIdentifier, periodsAgo: 1 }],
  m => m.alias("PP SumDayToClose").localId("PP_SumDayToClose")
);
export const m_POP_Amount = newPopMeasure(
  m_Amount, dateSnapshorYearIdentifier,
  m => m.alias("POP Amount").localId("POP_SumAmount")
);
export const m_PP_Amount  = newPreviousPeriodMeasure(
  m_Amount,
  [{ dataSet: dateSnapshotDatasetIdentifier, periodsAgo: 1 }],
  m => m.alias("PP Amount").localId("PP_SumAmount")
);
export const m_POP_SumPopulation  = newPopMeasure(
  Ldm.PopulationSum, dateSnapshorYearIdentifier,
  m => m.alias("POP Population").localId("POP_SumPopulation")
);
export const m_PP_SumPopulation   = newPreviousPeriodMeasure(
  Ldm.PopulationSum,
  [{ dataSet: dateSnapshotDatasetIdentifier, periodsAgo: 1 }],
  m => m.alias("PP Population").localId("PP_SumPopulation")
);
export const m_derive_AM_Population  = newPopMeasure(
  m_Sum_SumPopulation, dateSnapshorYearIdentifier,
  m => m.alias("derive AM Population").localId("POP_AM_Population")
);

//filter for Geo Chart
export const filterCity =
    newPositiveAttributeFilter(Ldm.Location0.City, ["Aguadilla", "Ashfield", "Chester", "Utuado", "<button>Portsmouth</button>", "Holtsville th? vi"]);
export const filterCity1Value = newPositiveAttributeFilter(Ldm.Location0.City, ["Holtsville th? vi"]);
export const filterState = newPositiveAttributeFilter(Ldm.Location0.State, ["VI","NY","PR"]);
export const filterTimezoneNegative = newNegativeAttributeFilter(Ldm.Location0.Timezone, ["-4"]);
export const filterDSTNegative = newNegativeAttributeFilter(Ldm.Location0.DST, ["0"]);

//filter measure value
export const filterSumPopulation_Equal = newMeasureValueFilter(Ldm.PopulationSum, "EQUAL_TO", 6);
export const filterSumPopulation_Between = newMeasureValueFilter(Ldm.PopulationSum, "BETWEEN", 0, 50);
export const filterMinPopulation_EqualTo = newMeasureValueFilter(Ldm.PopulationSum, "EQUAL_TO", -10000);
export const filterSumPopulation_LessThanOrEqualTo = newMeasureValueFilter(Ldm.PopulationSum, "LESS_THAN_OR_EQUAL_TO", 50);
export const filterActivityRestricted_LessThanOrEqualTo = newMeasureValueFilter(Ldm.m_ActivityRestricted.Sum, "LESS_THAN_OR_EQUAL_TO", 5000000);
export const filterAmountNullFormat_GreaterThanOrEqualTo = newMeasureValueFilter(Ldm.m_Amount, "GREATER_THAN_OR_EQUAL_TO", 5000000);
export const filterPOPSumDayToClose_Between = newMeasureValueFilter(m_POP_SumDayToClose, "BETWEEN", 20000, 100000);
export const filterAmountRatio_LessThan = newMeasureValueFilter(m_AmountRatio, "LESS_THAN", 50000000);
export const filterAmountRatio_GreaterThan  = newMeasureValueFilter(m_AmountRatio, "GREATER_THAN", 5000000);
export const filterAmount_NotBetween = newMeasureValueFilter(Ldm.m_Amount, "NOT_BETWEEN", 0, 20000000);
export const filterAmountNegative_NotEqualTo  = newMeasureValueFilter(Ldm.m_AmountNegative, "NOT_EQUAL_TO", 57025);
export const filterChange_EqualTo  = newMeasureValueFilter(m_Change_ClosedBOP_SnapshotBOP, "EQUAL_TO", -1);
export const filterAmount_LessThan   = newMeasureValueFilter(Ldm.m_Amount, "LESS_THAN", 1000000);
export const filterAmount_GreaterThan_differencevalue = newMeasureValueFilter(Ldm.m_Amount, "GREATER_THAN", 1000000);
export const filterAmount_GreaterThan_samevalue  = newMeasureValueFilter(Ldm.m_Amount, "GREATER_THAN", 5000000);
export const filterAmount_GreaterThan  = newMeasureValueFilter(Ldm.m_Amount, "GREATER_THAN", 5000000);

//filter attribute
export const filterProduct = newPositiveAttributeFilter(Ldm.a_Product, ["Educationly", "Explorer", "CompuSci", "PhoenixSoft", "WonderKid"]);
export const filterProductCompuSci = newPositiveAttributeFilter(Ldm.a_Product, ["CompuSci"]);
export const filterProductExplorerGrammarPlus = newPositiveAttributeFilter(Ldm.a_Product, ["Explorer", "Grammar Plus"]);
export const filterProductTouchAll = newPositiveAttributeFilter(Ldm.a_Product, ["TouchAll"]);
export const filterProductNegative = newNegativeAttributeFilter(Ldm.a_Product, ["TouchAll", "PhoenixSoft"]);
export const filterStageNameNegative = newNegativeAttributeFilter(Ldm.a_StageName, ["Closed Lost"]);
export const filterStageName  = newPositiveAttributeFilter(Ldm.a_StageName, ["Interest","Discovery","Short List","Risk Assessment","Conviction","Conviction"]);
export const filterStageNameInterest  = newPositiveAttributeFilter(Ldm.a_StageName, ["Interest"]);
export const filterStageNameInterestShortList  = newPositiveAttributeFilter(Ldm.a_StageName, ["Interest","Short List"]);
export const filterDepartment  = newPositiveAttributeFilter(Ldm.a_Department, ["Direct Sales"]);
export const filterFirstName  = newPositiveAttributeFilter(Ldm.a_FirstName, ["Anh","Bao","Cuong"]);
export const filterFirstNameAnh  = newPositiveAttributeFilter(Ldm.a_FirstName, ["Anh"]);

//filter Date
//snapshot dataset
export const filterabsoluteYearSnapshot = newAbsoluteDateFilter(dateSnapshotDatasetIdentifier, '2019-03-13', '2019-03-14');
export const filterrelativeYearSnapshot = newRelativeDateFilter(dateSnapshotDatasetIdentifier, 'GDC.time.date', -2, 0);
export const relativeDateYearSnapshot = newRelativeDateFilter(dateSnapshotDatasetIdentifier, 'GDC.time.year', -1, -1);
export const absoluteYearSnapshot = newAbsoluteDateFilter(dateSnapshotDatasetIdentifier, '2011-01-01', '2011-06-30');
export const relativeYearSnapshot = newRelativeDateFilter(dateSnapshotDatasetIdentifier, 'GDC.time.year', -8, 0);

//close dataset
export const absoluteDate = newAbsoluteDateFilter(dateClosedDatasetIdentifier, '2010-01-01', '2010-06-30');
export const relativeDateYear = newRelativeDateFilter(dateClosedDatasetIdentifier,  'GDC.time.year', -8, -8);
export const relativeDateMonth = newRelativeDateFilter(dateClosedDatasetIdentifier, 'GDC.time.month', -100, 12);
export const relativeDateQuater= newRelativeDateFilter(dateClosedDatasetIdentifier, 'GDC.time.quarter', -50, -4);
export const relativeDateWeek = newRelativeDateFilter(dateClosedDatasetIdentifier, 'GDC.time.week', -500, -1);
export const relativeDateWeekUs = newRelativeDateFilter(dateClosedDatasetIdentifier, 'GDC.time.week', -500, -1);

//attribute
export const a_Product = modifyAttribute(Ldm.a_Product, a =>
  a
      .localId("Product")
);
export const a_YearClosed = modifyAttribute(Ldm.a_YearClosed, a =>
  a
      .localId("YearClosed")
);
export const a_Department = modifyAttribute(Ldm.a_Department, a =>
  a
      .localId("Department")
);
export const a_StageName = modifyAttribute(Ldm.a_StageName, a =>
  a
      .localId("StageName")
);

//sorting
export const s_sortbyStageNameTotal =
{
    attributeSortItem: {
        direction: 'desc',
        attributeIdentifier: 'StageName',
        aggregation: 'sum'
    }
};
export const s_sortbyProductTotal =
{
    attributeSortItem: {
        aggregation: 'sum',
        direction: 'desc',
        attributeIdentifier: 'Product'

    }
};
export const s_sortByYearClosedSumClosedBOP = {
  attributeSortItem: {
      direction: 'desc',   // or 'desc',
      attributeIdentifier: 'StageName',
      aggregation: 'avg' // Optional;
  }
};
export const s_sortonProductDesc = newAttributeSort('Product', 'desc');
export const s_sortByAmountGrammarPlusDesc = newMeasureSort('Amount', 'desc',[{
  attributeLocatorItem:{
    attributeIdentifier: "Product",
    element:`/gdc/md/${workspace}/obj/949/elements?id=168284`
  }
}]);

export const s_sortByClosedBOPDescWithDepartment = newMeasureSort('ClosedBOP', 'desc',[{
  attributeLocatorItem:{
    attributeIdentifier: "Department",
    element: `/gdc/md/${workspace}/obj/1026/elements?id=1226`
  }
}]);

export const s_sortByAmountDesc = newMeasureSort('Amount', 'desc');
export const s_sortByClosedBOPDesc = newMeasureSort('ClosedBOP', 'desc');
export const s_sortByYearClosedAsc = newAttributeSort('YearClosed', 'asc');
export const s_sortByYearSnapshotDesc = newAttributeSort('YearSnapshot', 'desc');

//totals
export const t_totalsPivotTable :ITotal[] = 
[
  {
      measureIdentifier: "Amount",
      type: "avg",
      attributeIdentifier: "StageName",
  }
];
export const t_parentTotalsOnPivotTable  :ITotal[] = 
[
  {
        measureIdentifier: "Amount",
        type: "sum",
        attributeIdentifier: "YearClosed"
  },
    {
        measureIdentifier: "Amount",
        type: "max",
        attributeIdentifier: "YearClosed"
    },
    {
        measureIdentifier: "Amount",
        type: "min",
        attributeIdentifier: "YearClosed"
    },
    {
        measureIdentifier: "Amount",
        type: "avg",
        attributeIdentifier: "YearClosed"
    },
    {
        measureIdentifier: "Amount",
        type: "med",
        attributeIdentifier: "YearClosed"
    },
    {
        measureIdentifier: "Amount",
        type: "nat",
        attributeIdentifier: "YearClosed"
    },
    {
        measureIdentifier: "ClosedBOP",
        type: "sum",
        attributeIdentifier: "YearClosed"
    },
    {
        measureIdentifier: "ClosedBOP",
        type: "max",
        attributeIdentifier: "YearClosed"
    },
    {
        measureIdentifier: "ClosedBOP",
        type: "min",
        attributeIdentifier: "YearClosed"
    },
    {
        measureIdentifier: "ClosedBOP",
        type: "avg",
        attributeIdentifier: "YearClosed"
    },
    {
        measureIdentifier: "ClosedBOP",
        type: "med",
        attributeIdentifier: "YearClosed"
    },
    {
        measureIdentifier: "ClosedBOP",
        type: "nat",
        attributeIdentifier: "YearClosed"
    }
];
export const t_childTotalsOnPivotTable  :ITotal[] = 
[
  {
        measureIdentifier: "Amount",
        type: "sum",
        attributeIdentifier: "StageName"
    },
    {
        measureIdentifier: "Amount",
        type: "max",
        attributeIdentifier: "StageName"
    },
    {
        measureIdentifier: "Amount",
        type: "min",
        attributeIdentifier: "StageName"
    },
    {
        measureIdentifier: "Amount",
        type: "avg",
        attributeIdentifier: "StageName"
    },
    {
        measureIdentifier: "Amount",
        type: "med",
        attributeIdentifier: "StageName"
    },
    {
        measureIdentifier: "Amount",
        type: "nat",
        attributeIdentifier: "StageName"
    },
    {
        measureIdentifier: "ClosedBOP",
        type: "sum",
        attributeIdentifier: "StageName"
    },
    {
        measureIdentifier: "ClosedBOP",
        type: "max",
        attributeIdentifier: "StageName"
    },
    {
        measureIdentifier: "ClosedBOP",
        type: "min",
        attributeIdentifier: "StageName"
    },
    {
        measureIdentifier: "ClosedBOP",
        type: "avg",
        attributeIdentifier: "StageName"
    },
    {
        measureIdentifier: "ClosedBOP",
        type: "med",
        attributeIdentifier: "StageName"
    },
    {
        measureIdentifier: "ClosedBOP",
        type: "nat",
        attributeIdentifier: "StageName"
    }
];
export const t_bothParentandChildTotalsOnPivotTable  :ITotal[] = 
[
 {
        measureIdentifier: "Amount",
        type: "sum",
        attributeIdentifier: "StageName"
    },
    {
        measureIdentifier: "Amount",
        type: "max",
        attributeIdentifier: "StageName"
    },
    {
        measureIdentifier: "Amount",
        type: "min",
        attributeIdentifier: "StageName"
    },
    {
        measureIdentifier: "Amount",
        type: "avg",
        attributeIdentifier: "StageName"
    },
    {
        measureIdentifier: "Amount",
        type: "med",
        attributeIdentifier: "StageName"
    },
    {
        measureIdentifier: "Amount",
        type: "nat",
        attributeIdentifier: "StageName"
    },
    {
        measureIdentifier: "Amount",
        type: "sum",
        attributeIdentifier: "YearClosed"
    },
    {
        measureIdentifier: "Amount",
        type: "max",
        attributeIdentifier: "YearClosed"
    },
    {
        measureIdentifier: "Amount",
        type: "min",
        attributeIdentifier: "YearClosed"
    },
    {
        measureIdentifier: "Amount",
        type: "avg",
        attributeIdentifier: "YearClosed"
    },
    {
        measureIdentifier: "Amount",
        type: "med",
        attributeIdentifier: "YearClosed"
    },
    {
        measureIdentifier: "Amount",
        type: "nat",
        attributeIdentifier: "YearClosed"
    }
];