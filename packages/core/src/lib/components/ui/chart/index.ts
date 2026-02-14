import ChartContainer from './chart-container.svelte';
import ChartTooltip from './chart-tooltip.svelte';

export { getPayloadConfigFromPayload, type ChartConfig } from './chart-utils.js';

Object.assign(ChartContainer, { Tooltip: ChartTooltip });

export default ChartContainer as typeof ChartContainer & { Tooltip: typeof ChartTooltip };

export { ChartContainer, ChartTooltip, ChartContainer as Container, ChartTooltip as Tooltip };
