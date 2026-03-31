'use client';

import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

import client from "../network/client";
import { profileApi } from "../network/api/profile";

const useProfile = () => {
    const queryFn = async () => await client({ url: profileApi });

    const { data, isPending, error } = useQuery({
        queryFn,
        queryKey: ['profile'],
    })

    const errorMessage = error?.response?.data?.message;

    useEffect(() => {
        if (errorMessage) {
            alert(errorMessage ?? "Something went wrong");
        }
    }, [errorMessage]);

    const { email = '', imageUrl = '', fullName = '' } = data?.data ?? {};

    return { fullName, email, imageUrl, isPending };
}

export default useProfile;