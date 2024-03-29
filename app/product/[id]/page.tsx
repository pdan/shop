"use client";
import { Input } from "@mui/material";
import Head from "next/head";
import { useParams, useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import React from "react";

export default function ProductPage({}: {}): React.ReactElement {
    // const { basePath } = useRouter();
    const searchParams = useSearchParams();
    const params = useParams<{id: string}>();

    return (
        <>sdf

        </>
    );
}
