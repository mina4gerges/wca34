'use client';

import { useRouter } from 'next/navigation';
import { useMutation } from "@tanstack/react-query";

import client from "../network/client";
import { loginApi } from "../network/api/auth";

const useAuth = () => {
    const router = useRouter();

    const mutationFn = async (data) => await client({ url: loginApi, method: "POST", data });

    const onSuccess = ({ data }) => {
        const { status = '', message = '' } = data ?? {};

        if (status === 'error') {
            alert(message);
        }
        else {
            router.replace('/profile');
        }
    }

    const onError = (e) => alert(e?.response?.data?.message ?? "Something went wrong");

    const { isPending, mutate } = useMutation({ mutationFn, onSuccess, onError });

    return { login: mutate, isPending };
}

export default useAuth;