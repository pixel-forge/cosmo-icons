import * as React from 'react';
import {Gear, Gears} from './icon-components';

type CosmoIcon = {
	solid: (props:React.HTMLProps<HTMLDivElement>) => React.JSX.Element;
}

const cosmoIcon = (Icon:React.ElementType) => (props:React.HTMLProps<HTMLDivElement>) => {
	const {className,...rest} = props;
	const _className = `cosmo-icon ${className ?? ''}`.trim();
	return <div className={_className} {...rest}><Icon/></div>
}

export const CosmoIcons:{[K:string]: CosmoIcon} = {
	gear: {solid: cosmoIcon(Gear)},
	gears: {solid: cosmoIcon(Gears)},
}