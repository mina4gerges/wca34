'use client';

import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

import client from "../network/client";
import { profileApi } from "../network/api/profile";

const useProfile = () => {
    const queryFn = async () => await client({url: profileApi});

    const { data, isPending, error } = useQuery({
        queryFn,
        queryKey: ['profile'],
    })

    useEffect(() => {
        if (error) {
            alert(error?.response?.data?.message ?? "Something went wrong");
        }
    }, [error]);

    const {email = '', imageUrl = '', fullName = ''} = data?.data ?? {}

    return {fullName, email, imageUrl, isPending}
}

export default useProfile;