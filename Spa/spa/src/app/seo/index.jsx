import React from 'react'

export default function Seo({title, description}) {
    document.querySelector('title').innerHTML = title;
    //console.dir(document.querySelector('meta[2]').innerHTML);

    return null;
}
