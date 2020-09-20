import React from "react";
import "./Item.scss";

let store = {
	state: [
		{
			id: 0,
			caption: 'Сказочное заморское',
			title: 'Нямушка',
			desc: 'с фуа-гра',
			servings: '10 порций',
			gift: ['мышь в подарок'],
			weight: '0,5',
			text: 'Печень утки разварная с артишоками.'

		},
		{

			id: 1,
			caption: 'Сказочное заморское',
			title: 'Нямушка',
			desc: 'с рыбой',
			servings: '24 порций',
			gift: ['2 мыши в подарок'],
			weight: '2',
			text: 'Головы щучьи с чесноком да свежайшая сёмгушка.'
		},
		{
			id: 2,
			caption: 'Сказочное заморское',
			title: 'Нямушка',
			desc: 'с курой',
			servings: '100 порций',
			gift:[ '5 мышей в подарок','заказчик доволен'],
			weight: '2',
			text: 'Филе из цыплят с трюфелями в бульоне.'
		}
	]



};
let itemElements = store.state.map(el => {
	return (
		<div className='item'>
			<div className='item-inner'>
				<div className='item-caption'>
					{el.caption}
				</div>
				<div className='item-title'>
					{el.title}
				</div>
				<div className='item-desc'>
					{el.desc}
				</div>
				<div className='item-servings'>
					{el.servings}
				</div>
				{el.gift.map(gift=><div className='item-gift'>{gift}</div>)}
				<div className='item-pic'>

				</div>
				<div className='item-weight'>
					<span>
					{el.weight}
					</span>
					кг
				</div>
			</div>
			<div className='item-text'>
			Чего сидишь? Порадуй котэ, <a href='#'>купи.</a>
				<span className='active'>{el.text}</span>
			</div>
		</div>
	);
});

const item = () => {
	return (itemElements);
};

export default item;