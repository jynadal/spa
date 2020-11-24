import React from 'react'

export default function Seo({title, description}) {
    document.querySelector('title').innerHTML = title;
    //console.dir(document.querySelector('meta[Name="description"]').setAttribute('content', description));
    document.querySelector('meta[Name="description"]').setAttribute('content', description)

    return null;
}
