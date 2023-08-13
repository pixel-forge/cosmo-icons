import * as React from 'react';
import GearURL, {ReactComponent as Gear} from './svgs/gear.svg';
import GearsURL, {ReactComponent as Gears} from './svgs/gears.svg';

type CosmoIcon = {
	component: (props:React.HTMLProps<HTMLDivElement>) => React.JSX.Element;
	url: string;
}

const cosmoIcon = (Icon:React.ElementType) => (props:React.HTMLProps<HTMLDivElement>) => {
	const {className,...rest} = props;
	const _className = `cosmo-icon ${className ?? ''}`.trim();
	return <div className={_className} {...rest}><Icon/></div>
}

export const CosmoIcons:{[K:string]: CosmoIcon} = {
	gear: {component: cosmoIcon(Gear), url: GearURL},
	gears: {component: cosmoIcon(Gears), url: GearsURL},
}