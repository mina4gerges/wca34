'use client';

import { useQuery } from "@tanstack/react-query";

import client from "../network/client";
import { profileApi } from "../api/profile";

const useProfile = () => {
    const queryFn = async () => await client({ url:profileApi });

    const {data, isPending} = useQuery({
        queryFn,
        queryKey: ['profile']
    })

    const { email = '', imageUrl = '', fullName = '' } = data?.data ?? {}

    return {fullName, email, imageUrl, isPending}
}

export default useProfile;