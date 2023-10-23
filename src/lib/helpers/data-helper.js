// @ts-nocheck

import technologies from '$lib/data/tech-color.json';

export function getTechnologyNames() {
    return Object.keys(technologies);
}

export function objectContentIsFalsey(obj) {
    for (const prop in obj) {
        if (obj[prop]) {
            return false
        }
    }
    return true
}