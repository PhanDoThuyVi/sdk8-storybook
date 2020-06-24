// //author: nknbich
// import React, { Component } from "react";

// import { storiesOf } from "@storybook/react";
// import '@gooddata/sdk-ui-charts/styles/css/main.css'; 
// import {GeoPushpinChart } from '@gooddata/sdk-ui-geo';
// import { AreaChart, Headline, DonutChart, Treemap, ColumnChart, BarChart, ScatterPlot, BubbleChart, Heatmap } from '@gooddata/sdk-ui-charts';
// import { AttributeFilter } from "@gooddata/sdk-ui-filters";
// import { InsightView } from '@gooddata/sdk-ui-ext';
// import { BackendProvider,LoadingComponent, ErrorComponent } from "@gooddata/sdk-ui";
// import { WorkspaceProvider } from "@gooddata/sdk-ui";
// import bearFactory, { ContextDeferredAuthProvider } from "@gooddata/sdk-backend-bear";
// import { projectId as workspace } from "../src/constants";
// import {Ldm, LdmExt} from "../src/ldm";

// const backend = bearFactory().withAuthentication(new ContextDeferredAuthProvider());
// //import "babel-polyfill";
// // import DatePicker from "react-datepicker"; //support for datepicker
// // import "react-datepicker/dist/react-datepicker.css"; //support for datepicker
// // import moment from "moment"; //support for datepicker
// import Select from "react-select"; //support for parent filter
// import "react-select/dist/react-select.css"; //must use version "react-select": "1.2.1"
// import Measure from "react-measure"; //support for responsive chart

// const WRAPPER_STYLE = { width: 1200, height: 400 };
// let exportResult: any;

// function onExportReady(execution: any) {
//     exportResult = execution;
// }

// async function doExport() {
//     const result = await exportResult({
//         format: 'xlsx',   //'xlsx'
//         includeFilterContext: true,
//         mergeHeaders: true
//     });
//     //downloadFile(result.uri);
//     window.open(result.uri);
// }

// //datepicker
// const dateFormat = "YYYY-MM-DD";

// class DatePickerExample extends Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             from: moment("2010-01-01").toDate(),
//             to: moment("2011-12-31").toDate(),
//             error: null,
//         };

//         this.onFromChange = this.onFromChange.bind(this);
//         this.onToChange = this.onToChange.bind(this);
//         this.onDateChange = this.onDateChange.bind(this);
//     }

//     onFromChange(value) {
//         this.onDateChange("from", value);
//     }

//     onToChange(value) {
//         this.onDateChange("to", value);
//     }

//     onDateChange(prop, value) {
//         const { from, to } = this.state;
//         const newState = {
//             from,
//             to,
//             error: null,
//         };
//         newState[prop] = value;
//         this.setState(newState);
//     }

//     onLoadingChanged(...params) {
//         // eslint-disable-next-line no-console
//         console.info("DatePickerExample onLoadingChanged", ...params);
//     }

//     onError(...params) {
//         // eslint-disable-next-line no-console
//         console.info("DatePickerExample onLoadingChanged", ...params);
//     }

//     render() {
//         const { from, to, error } = this.state;
//         const filters = [
//             {
//                 absoluteDateFilter: {
//                     dataSet: {
//                         identifier: 'closed.dataset.dt',
//                     },
//                     from: moment(from).format("YYYY-MM-DD"),
//                     to: moment(to).format("YYYY-MM-DD"),
//                 },
//             },
//         ];
//         return (
//             <div className="s-date-picker">
//                 <style jsx="true">{`
//                     label {
//                         display: inline-block;
//                         vertical-align: top;
//                         margin-right: 20px;
//                     }
//                     h4 {
//                         margin-bottom: 0;
//                     }
//                     label :global(.gd-input-field) {
//                         min-width: 212px;
//                     }
//                 `}</style>
//                 <label className="s-date-picker-from">
//                     <h4>From</h4>
//                     <DatePicker className="gd-input-field" selected={from} onChange={this.onFromChange} />
//                 </label>
//                 <label className="s-date-picker-to">
//                     <h4>To</h4>
//                     <DatePicker className="gd-input-field" selected={to} onChange={this.onToChange} />
//                 </label>
//                 <AreaChart
//                     projectId={fixtures.projectId}
//                     measures={[fixtures.m_ClosedBOP, fixtures.m_ClosedEOP]}
//                     viewBy={[fixtures.a_YearClosed]}
//                     config={{
//                         legend: {
//                             enabled: false // disable the original legend implementation
//                         }
//                     }}
//                     filters={filters}
//                 />
//             </div>
//         );
//     }
// };

// //custom legend
// class CustomLegendCore extends Component {
//     constructor(props) {
//         super(props);

//         this.onLegendReady = this.onLegendReady.bind(this);

//         this.state = {
//             legendItems: [],
//         };
//     }

//     onLoadingChanged(...params) {
//         // eslint-disable-next-line no-console
//         return console.log("CustomLegendExample onLoadingChanged", ...params);
//     }

//     onError(...params) {
//         // eslint-disable-next-line no-console
//         return console.log("CustomLegendExample onError", ...params);
//     }

//     onLegendReady(data) {
//         this.setState({
//             legendItems: data.legendItems,
//         });
//     }

//     renderTriangle(color) {
//         const style = {
//             width: 0,
//             height: 0,
//             borderTop: "10px solid transparent",
//             borderLeft: `20px solid ${color}`,
//             borderBottom: "10px solid transparent",
//             marginRight: "5px",
//         };
//         return <div style={style} />;
//     }

//     renderCustomLegend() {
//         const { legendItems } = this.state;

//         if (!legendItems.length) {
//             return null;
//         }

//         return (
//             <div className="s-custom-legend">
//                 {legendItems.map((item, idx) => {
//                     return (
//                         <div
//                             key={idx} // eslint-disable-line react/no-array-index-key
//                             onClick={item.onClick}
//                             style={{ display: "flex", margin: "10px 0", cursor: "pointer" }}
//                         >
//                             {this.renderTriangle(item.color)}
//                             {item.name}
//                         </div>
//                     );
//                 })}
//             </div>
//         );
//     }
// };

// class CustomLegendMoreMeasures extends CustomLegendCore {
//     render() {
//         return (
//             <a>
//                 <h1>Legend from more measures</h1>
//                 {this.renderCustomLegend()}
//                 {/* <AreaChart
//                         projectId={fixtures.projectId}
//                         measures={[fixtures.m_SumDayToClose, fixtures.m_OppFirstSnapshot]}
//                         viewBy={[fixtures.a_Product]}
//                         onLoadingChanged={this.onLoadingChanged}
//                         config={{
//                             legend: {
//                                 enabled: false,
//                             },
//                         }}
//                         onError={this.onError}
//                         onLegendReady={this.onLegendReady}
//                 /> */}
//                 <div style={{ height: 1000, border: "solid 2px black" }}>
//                     <GeoPushpinChart
//                         projectId={fixtures.projectId}
//                         location={fixtures.g_Latlon}
//                         size={fixtures.m_SumPopulation}
//                         color={fixtures.m_MinPopulation}
//                         segmentBy={fixtures.a_State}
//                         config={{
//                             legend: {
//                                 enabled: false,
//                             },
//                             mapboxToken: "pk.eyJ1IjoiaW1udXR6IiwiYSI6ImNrMHAxY2UxZzBnc2EzZG11YmVhd2dubG0ifQ.bUTN7ceAHq6kVooe3MKgqg"
//                         }}
//                         onLoadingChanged={this.onLoadingChanged}
//                         onError={this.onError}
//                         onLegendReady={this.onLegendReady}
//                     />
//                 </div>
//             </a>
//         );
//     }
// };

// class CustomLegendStackBy extends CustomLegendCore {
//     render() {
//         return (
//             <a>
//                 <h1>Legend from Stack By</h1>
//                 {this.renderCustomLegend()}
//                 <ColumnChart
//                     projectId={fixtures.projectId}
//                     measures={[fixtures.m_SnapshotBOP]}
//                     viewBy={[fixtures.a_Product]}
//                     stackBy={fixtures.a_StageName}
//                     onLoadingChanged={this.onLoadingChanged}
//                     config={{
//                         legend: {
//                             enabled: false,
//                         },
//                     }}
//                     onError={this.onError}
//                     onLegendReady={this.onLegendReady}
//                 />
//             </a>
//         );
//     }
// };

// class CustomLegendHeatMap extends CustomLegendCore {
//     render() {
//         return (
//             <a>
//                 <h1>Legend from Heatmap (doesn't have legend)</h1>
//                 {this.renderCustomLegend()}
//                 <Heatmap
//                     projectId={fixtures.projectId}
//                     measure={fixtures.m_ClosedBOP}
//                     rows={fixtures.a_yearClosed}
//                     columns={fixtures.a_Product}
//                     onLoadingChanged={this.onLoadingChanged}
//                     config={{
//                         legend: {
//                             enabled: false,
//                         },
//                     }}
//                     onError={this.onError}
//                     onLegendReady={this.onLegendReady}
//                 />
//             </a>
//         );
//     }
// };

// class CustomLegendBubbleChart extends CustomLegendCore {
//     render() {
//         return (
//             <a>
//                 <h1>Legend from BubbleChart</h1>
//                 {this.renderCustomLegend()}
//                 <BubbleChart
//                     projectId={fixtures.projectId}
//                     xAxisMeasure={fixtures.m_Amount}
//                     yAxisMeasure={fixtures.m_AmountBOP}
//                     size={fixtures.m_AvgWon}
//                     viewBy={fixtures.a_Product}
//                     onLoadingChanged={this.onLoadingChanged}
//                     config={{
//                         legend: {
//                             enabled: false,
//                         },
//                     }}
//                     onError={this.onError}
//                     onLegendReady={this.onLegendReady}
//                 />
//             </a>
//         );
//     }
// };
// class CustomLegendScatterPlot extends CustomLegendCore {
//     render() {
//         return (
//             <a>
//                 <h1>Legend from ScatterPlot (doesn't have legend)</h1>
//                 {this.renderCustomLegend()}
//                 <ScatterPlot
//                     projectId={fixtures.projectId}
//                     xAxisMeasure={fixtures.m_Amount}
//                     yAxisMeasure={fixtures.m_AmountBOP}
//                     attribute={fixtures.a_Product}
//                     onLoadingChanged={this.onLoadingChanged}
//                     config={{
//                         legend: {
//                             enabled: false,
//                         },
//                     }}
//                     onError={this.onError}
//                     onLegendReady={this.onLegendReady}
//                 />
//             </a>
//         );
//     }
// };
// class CustomLegendTreemap extends CustomLegendCore {
//     render() {
//         return (
//             <a>
//                 <h1>Legend from Treemap</h1>
//                 {this.renderCustomLegend()}
//                 <Treemap
//                     projectId={fixtures.projectId}
//                     measures={[fixtures.m_ClosedBOP]}
//                     viewBy={fixtures.a_YearClosed}
//                     segmentBy={fixtures.a_Product}
//                     onLoadingChanged={this.onLoadingChanged}
//                     config={{
//                         legend: {
//                             enabled: false,
//                         },
//                     }}
//                     onError={this.onError}
//                     onLegendReady={this.onLegendReady}
//                 />
//             </a>
//         );
//     }
// };
// class CustomLegendDonutChart extends CustomLegendCore {
//     render() {
//         return (
//             <a>
//                 <h1>Legend from DonutChart</h1>
//                 {this.renderCustomLegend()}
//                 <DonutChart
//                     projectId={fixtures.projectId}
//                     measures={[fixtures.m_ClosedBOP]}
//                     viewBy={fixtures.a_YearClosed}
//                     onLoadingChanged={this.onLoadingChanged}
//                     config={{
//                         legend: {
//                             enabled: false,
//                         },
//                     }}
//                     onError={this.onError}
//                     onLegendReady={this.onLegendReady}
//                 />
//             </a>
//         );
//     }
// };
// class CustomLegendHeadline extends CustomLegendCore {
//     render() {
//         return (
//             <a>
//                 <h1>Legend from Headline</h1>
//                 {this.renderCustomLegend()}
//                 <Headline
//                     projectId={fixtures.projectId}
//                     primaryMeasure={fixtures.m_ClosedBOP}
//                     onLoadingChanged={this.onLoadingChanged}
//                     config={{
//                         legend: {
//                             enabled: false,
//                         },
//                     }}
//                     onError={this.onError}
//                     onLegendReady={this.onLegendReady}
//                 />
//             </a>
//         );
//     }
// };

// class LoadingComponentExample extends Component {
//     render() {
//         return <LoadingComponent height={200} className="s-default-loading" />;
//     }
// };

// class CustomisedLoadingComponentExample extends Component {
//     render() {
//         return (
//             <LoadingComponent
//                 className="s-customised-loading"
//                 color="tomato"
//                 height={300}
//                 imageHeight={16}
//                 speed={2}
//             />
//         );
//     }
// };

// class ErrorComponentExample extends Component {
//     render() {
//         return (
//             <ErrorComponent
//                 icon="icon-ghost"
//                 className="s-default-Error"
//                 message="This is an Custom Error"
//                 description="�with description."
//                 height={200}
//             />
//         );
//     }
// };

// class ResponsiveExampleNewest extends Component {
//     constructor() {
//         super();
//         this.state = { size: [500, 400] };
//     }

//     resize(size) {
//         this.setState({ size });
//     }

//     render() {
//         const [width, height] = this.state.size;

//         return (
//             <div>
//                 <button
//                     onClick={() => this.setState({ size: [500, 400] })}
//                     className="gd-button gd-button-secondary"
//                 >
//                     500x400
//                 </button>
//                 <button
//                     onClick={() => this.setState({ size: [800, 200] })}
//                     className="gd-button gd-button-secondary s-resize-800x200"
//                 >
//                     800x200
//                 </button>

//                 <hr className="separator" />

//                 <div style={{ width, height }} className="s-resizable-vis">
//                     <Measure client>
//                         {({ measureRef, contentRect }) => {
//                             const usedHeight =
//                                 contentRect.client && contentRect.client.height
//                                     ? Math.floor(contentRect.client.height)
//                                     : 0;
//                             const usedWidth =
//                                 contentRect.client && contentRect.client.width
//                                     ? Math.floor(contentRect.client.width)
//                                     : 0;
//                             return (
//                                 <div style={{ width: "100%", height: "100%" }} ref={measureRef}>
//                                     <BarChart
//                                         width={usedWidth}
//                                         height={usedHeight}
//                                         projectId={fixtures.projectId}
//                                         measures={[fixtures.m_SumDayToClose]}
//                                         viewBy={[fixtures.a_Product]}
//                                     />
//                                 </div>
//                             );
//                         }}
//                     </Measure>
//                 </div>

//             </div>
//         );
//     }
// };

// class ResponsiveExampleOlder extends Component {
//     constructor() {
//         super();
//         this.state = { size: [500, 400] };
//     }

//     resize(size) {
//         this.setState({ size });
//     }

//     render() {
//         const [width, height] = this.state.size;
//         return (
//             <div>
//                 <button onClick={() => this.setState({ size: [500, 400] })} className="button button-secondary">500x400</button>
//                 <button onClick={() => this.setState({ size: [800, 200] })} className="button button-secondary s-resize-800x200">800x200</button>

//                 <hr className="separator" />

//                 <div style={{ width, height }} className="s-resizable-vis">
//                     <Measure>
//                         {dimensions => (
//                             <div style={{ width: '100%', height: '100%' }}>
//                                 <BarChart
//                                     projectId={fixtures.projectId}
//                                     measures={[fixtures.m_SumDayToClose]}
//                                     viewBy={[fixtures.a_Product]}
//                                     width={dimensions.width}
//                                     height={dimensions.height}
//                                 />
//                             </div>
//                         )}
//                     </Measure>
//                 </div>
//             </div>
//         );
//     }
// };

// class AttributeFilterIdentifierExample extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             filters: []
//         };
//     }

//     onApply = (filter) => {

//         const isPositive = !!filter.in;
//         const elementsProp = isPositive ? 'in' : 'notIn';

//         const filters = [{
//             [isPositive ? 'positiveAttributeFilter' : 'negativeAttributeFilter']: {
//                 displayForm: {
//                     identifier: filter.id
//                 },
//                 [elementsProp]: filter[elementsProp].map(element => (`/gdc/md/${fixtures.projectId}/obj/77081/elements?id=${element}`))
//             }
//         }];

//         this.setState({ filters });
//     }

//     render() {
//         const { filters } = this.state;
//         return (
//             <div>
//                 <AttributeFilter
//                     identifier="label.geopushpin.city"
//                     projectId={fixtures.projectId}
//                     fullscreenOnMobile={false}
//                     onApply={this.onApply}
//                 />
//                 <div style={{ height: 1000, border: "solid 2px black" }}>
//                     <GeoPushpinChart
//                         projectId={fixtures.projectId}
//                         location={fixtures.g_Latlon}
//                         size={fixtures.m_SumPopulation}
//                         color={fixtures.m_MinPopulation}
//                         segmentBy={fixtures.a_City}
//                         filters={filters}
//                         onExportReady={onExportReady}
//                         config={{ mapboxToken: "pk.eyJ1IjoiaW1udXR6IiwiYSI6ImNrMHAxY2UxZzBnc2EzZG11YmVhd2dubG0ifQ.bUTN7ceAHq6kVooe3MKgqg" }}
//                     />
//                 </div>
//                 <button style={{ padding: "15px 32px" }} onClick={doExport}>Export</button>
//             </div>
//         );
//     }
// };

// class AttributeFilterUriExample extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             filters: []
//         };
//     }

//     onApply = (filter) => {

//         const isPositive = !!filter.in;
//         const elementsProp = isPositive ? 'in' : 'notIn';

//         const filters = [{
//             [isPositive ? 'positiveAttributeFilter' : 'negativeAttributeFilter']: {
//                 displayForm: {
//                     uri: filter.id
//                 },
//                 [elementsProp]: filter[elementsProp].map(element => (`/gdc/md/${fixtures.projectId}/obj/77081/elements?id=${element}`))
//             }
//         }];

//         this.setState({ filters });
//     }

//     render() {
//         const { filters } = this.state;
//         return (
//             <div>
//                 <AttributeFilter
//                     uri={`/gdc/md/${fixtures.projectId}/obj/77082`}
//                     projectId={fixtures.projectId}
//                     fullscreenOnMobile={false}
//                     onApply={this.onApply}
//                 />
//                 <div style={{ height: 1000, border: "solid 2px black" }}>
//                     <GeoPushpinChart
//                         projectId={fixtures.projectId}
//                         location={fixtures.g_Latlon}
//                         size={fixtures.m_SumPopulation}
//                         color={fixtures.m_MinPopulation}
//                         segmentBy={fixtures.a_City}
//                         filters={filters}
//                         onExportReady={onExportReady}
//                         config={{ mapboxToken: "pk.eyJ1IjoiaW1udXR6IiwiYSI6ImNrMHAxY2UxZzBnc2EzZG11YmVhd2dubG0ifQ.bUTN7ceAHq6kVooe3MKgqg" }}
//                     />
//                 </div>
//                 <button style={{ padding: "15px 32px" }} onClick={doExport}>Export</button>
//             </div>
//         );
//     }
// };

// class ParentFilterExample extends Component {
//     constructor(props) {
//         super(props);
//         this.onChangeHandlers = {};
//         this.renderFilter = this.renderFilter.bind(this);
//         this.state = {
//             stageFilterValues: [],
//             statusFilterValues: [],
//         };
//         this.handlers = {
//             stage: this.onStageChange,
//             status: this.onStatusChange,
//         };
//     }

//     onStageChange = stageFilterValues => {
//         this.setState({
//             stageFilterValues,
//         });
//     };

//     onStatusChange = statusFilterValues => {
//         this.setState({
//             statusFilterValues,
//         });
//     };

//     renderVisualization(stageFilterValues, statusFilterValues) {
//         const visFilters = [];

//         if (stageFilterValues.length) {
//             visFilters.push(
//                 Model.positiveAttributeFilter(
//                     "label.geopushpin.latlon",
//                     stageFilterValues.map(filter => filter.value),
//                 ),
//             );
//         }
//         if (statusFilterValues.length) {
//             visFilters.push(
//                 Model.positiveAttributeFilter(
//                     "label.comp.qegnBZ9",
//                     statusFilterValues.map(filter => filter.value),
//                 ),
//             );
//         }

//         return (
//             <div style={{ height: 1000 }}>
//                 <div style={{ height: 600, border: "solid 2px black" }}>
//                     <GeoPushpinChart
//                         projectId={fixtures.projectId}
//                         location={fixtures.g_Latlon}
//                         size={fixtures.m_SumPopulation}
//                         color={fixtures.m_MinPopulation}
//                         config={{ mapboxToken: "pk.eyJ1IjoiaW1udXR6IiwiYSI6ImNrMHAxY2UxZzBnc2EzZG11YmVhd2dubG0ifQ.bUTN7ceAHq6kVooe3MKgqg" }}
//                         filters={visFilters}
//                         onExportReady={onExportReady}
//                     />
//                 </div>
//                 <button style={{ padding: "15px 32px" }} onClick={doExport}>Export</button>
//             </div>
//         );
//     }

//     renderFilter(key, displayFormIdentifier, filterValues, placeholder, options, onChange) {
//         return (
//             <AttributeElements
//                 key={key}
//                 identifier={displayFormIdentifier}
//                 projectId={fixtures.projectId}
//                 options={options}
//             >
//                 {({ validElements, isLoading, error }) => {
//                     if (error) {
//                         return <div>{error}</div>;
//                     }
//                     const selectOptions = validElements
//                         ? validElements.items.map(item => ({
//                             label: item.element.title,
//                             value: item.element.uri,
//                         }))
//                         : [];
//                     return (
//                         <span
//                             style={{
//                                 display: "inline-block",
//                                 minWidth: "10em",
//                                 verticalAlign: "middle",
//                             }}
//                         >
//                             <Select
//                                 onChange={onChange}
//                                 className={`s-select-${key}`}
//                                 options={selectOptions}
//                                 multi
//                                 isLoading={isLoading}
//                                 placeholder={placeholder}
//                                 value={filterValues}
//                             />
//                         </span>
//                     );
//                 }}
//             </AttributeElements>
//         );
//     }

//     render() {
//         const { stageFilterValues, statusFilterValues } = this.state;

//         // State (parent) filter
//         const stageFilter = this.renderFilter(
//             "latlon",
//             "label.geopushpin.latlon",
//             stageFilterValues,
//             "all latlons",
//             { limit: 200 },
//             this.onStageChange,
//         );

//         // City (child) filter
//         const statusOptions = { limit: 20 };
//         if (stageFilterValues.length) {
//             // parent value uris need to be surrounded by '[]' and separated by ','
//             const selectedParentItems = stageFilterValues
//                 .map(parentItem => `[${parentItem.value}]`)
//                 .join(", ");
//             const afm = {
//                 attributes: [
//                     {
//                         displayForm: {
//                             identifier: "label.comp.qegnBZ9",
//                         },
//                         localIdentifier: "childAttribute",
//                     },
//                 ],
//                 filters: [
//                     {
//                         expression: {
//                             value:
//                                 // parent attribute identifier surrounded by '{}'
//                                 `({attr.geopushpin.latlon}` +
//                                 // selected parent values surrounded by '[]' and separated by ','
//                                 ` IN (${selectedParentItems}))` +
//                                 // attribute identifier of common attribute between parent
//                                 // and child attributes surrounded by '{}'
//                                 ` OVER {attr.geopushpin.latlon}` +
//                                 // child attribute identifier surrounded by '{}'
//                                 ` TO {attr.comp.qegnBZ9}`,
//                         },
//                     },
//                 ],
//             };
//             statusOptions.afm = afm;
//             console.log(afm);
//         }
//         const cityFilter = this.renderFilter(
//             "CA",
//             "label.comp.qegnBZ9",
//             statusFilterValues,
//             "all CAs",
//             statusOptions,
//             this.onStatusChange,
//         );

//         return (
//             <div>
//                 <span>Parent filter:&emsp;</span>
//                 {stageFilter}
//                 &emsp;and Children filter:&emsp; {cityFilter}
//                 <hr className="separator" />
//                 {this.renderVisualization(stageFilterValues, statusFilterValues)}
//             </div>
//         );
//     }
// };

// storiesOf('Advance cases', module)
//     .add('Date picker', () => (
//         <div style={WRAPPER_STYLE}>
//             <h1>Date picker</h1>
//             <DatePickerExample />
//         </div>
//     ))
//     .add('Custom Legend', () => (
//         <div style={WRAPPER_STYLE}>
//             <CustomLegendMoreMeasures />
//             <CustomLegendStackBy />
//             <CustomLegendHeatMap />
//             <CustomLegendBubbleChart />
//             <CustomLegendScatterPlot />
//             <CustomLegendTreemap />
//             <CustomLegendDonutChart />
//             <CustomLegendHeadline />
//         </div>
//     ))
//     .add('Loading and Error Components', () => (
//         <div style={WRAPPER_STYLE}>
//             <h1>Default loading</h1>
//             <BarChart
//                 projectId={fixtures.projectId}
//                 measures={[fixtures.m_SumDayToClose]}
//                 viewBy={[fixtures.a_Product]}
//                 LoadingComponent={LoadingComponentExample}
//             />
//             <h1>Customize loading</h1>
//             <BarChart
//                 projectId={fixtures.projectId}
//                 measures={[fixtures.m_SnapshotBOP]}
//                 viewBy={[fixtures.a_Product]}
//                 LoadingComponent={CustomisedLoadingComponentExample}
//             />
//             <h1>Error</h1>
//             <BarChart
//                 projectId={fixtures.projectId}
//                 measures={[fixtures.m_SnapshotBOP, fixtures.m_SnapshotBOP]}
//                 viewBy={[fixtures.a_Product]}
//                 ErrorComponent={ErrorComponentExample}
//             />
//         </div>
//     ))
//     .add('Responsive chart', () => (
//         <div>
//             <h1>Responsive chart</h1>
//             <p>Test on version below 7+: use component ResponsiveExampleOlders </p>
//             <p>Test on version higher 7+: use component ResponsiveExampleNewest </p>
//             <ResponsiveExampleNewest />
//         </div>
//     ))
//     .add('Filter', () => (
//         <div style={WRAPPER_STYLE}>
//             <h1>ATT-A. Filter by identifier</h1>
//             <AttributeFilterIdentifierExample />
//             <h1>ATT-B. Filter by Uri</h1>
//             {/* <AttributeFilterUriExample /> */}
//         </div>
//     ))
//     .add('ParentFilter', () => (
//         <div style={WRAPPER_STYLE}>
//             <ParentFilterExample />
//         </div>
//     ));
