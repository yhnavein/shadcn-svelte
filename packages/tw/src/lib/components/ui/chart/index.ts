import ChartContainer from './chart-container.svelte';
import ChartTooltip from './chart-tooltip.svelte';

export { getPayloadConfigFromPayload, type ChartConfig } from './chart-utils.js';

const Chart = Object.assign(ChartContainer, { Tooltip: ChartTooltip });

export default Chart;

export { ChartContainer, ChartTooltip, ChartContainer as Container, ChartTooltip as Tooltip };
