export interface StylePropsTypes {
  width: number | undefined;
  height: number | undefined;
  barWidth: number | undefined;
  barColor: string[] | undefined;
  chartTitleFontSize: number | undefined;
  dataTitleFontSize: number | undefined;
  dotWidth: number | undefined;
}

export interface dataTypes {
  title: string;
  data: Array<number>;
}

export interface PropsTypes {
  style: StylePropsTypes;
  title: string;
  xLabel: string[];
  yUnit: number; // y축 단위  ex) 0, 5, 10, 15, 20,,
  data: Array<dataTypes>;
}

export interface ContainerTypes {
  width: number | undefined;
  height: number | undefined;
}

export interface ChartTitleTypes {
  fontSize: number | undefined;
}

export interface DataTitleTextTypes {
  fontSize: number | undefined;
}

export interface DataTitleDotType {
  width: number | undefined;
  color: string | undefined;
}

export interface BarType {
  width: number | undefined;
  height: number | undefined;
  color: string | undefined;
}
