"use client";
import { useParams } from "next/navigation"

export default function() {
    const {tags} = useParams<{tags: string[]}>()
    
    return <>{tags.map(tag => `${tag} + abc`)}</>
}