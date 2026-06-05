"use client"

import { useState } from "react";
import { Ellipsis } from 'lucide-react';
import { usePathname, useRouter } from "next/navigation";

import {
    Pagination,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationContent,
    PaginationPrevious
} from "./ui/pagination";
import { cn } from "@/lib/utils";
import { navigate } from "@/lib/actions";

export const PaginationButtons = ({
    // Pass "params" (Append page in search params) | "hook" (Manage using setPage()).
    type = "hook",
    // Current page, can be from anywhere.
    page,
    // Total data size.
    total = 1,
    // (optional) Page size.
    count = 25,
    // (optional) If would like to append the params with another name rather than "page".
    paramsKey = "page",
    // (optional) Only use with type hook.
    setPage,
    // (optional)
    className,
}) => {
    const router = useRouter();
    const pathname = usePathname()

    page = parseInt(page);
    const totalPage = Math.ceil(total / count);

    const updatePage = (num) => {
        if (type === "hook") {
            setPage && setPage(num);
        } else if (type === "params") {
            const urlParams = new URLSearchParams(window.location.search);
            urlParams.set(paramsKey || "page", num.toString());

            // Construct the full URL
            const fullPath = `${pathname}?${urlParams.toString()}`;

            router.refresh()
            navigate(fullPath);
        }
    };

    const PageBtn = ({
        num,
        click = true
    }) => {
        return (
            <PaginationItem>
                <PaginationLink
                    onClick={() => click && page != num && updatePage(num)}
                    isActive={page == num}
                    className="cursor-pointer"
                >
                    {num}
                </PaginationLink>
            </PaginationItem>
        );
    };

    const PageEllipsis = () => {
        return (
            <PaginationItem>
                <Ellipsis size={14} />
            </PaginationItem>
        );
    };

    const SwitchWrapper = ({ children, notEqualTo }) => {
        const [btnClicked, setBtnClicked] = useState(false);

        return (
            <>
                {btnClicked && ((notEqualTo && !notEqualTo.includes(page)) || !notEqualTo) ? (
                    <div>
                        <input
                            type="number"
                            min={1}
                            max={totalPage}
                            defaultValue={
                                page != totalPage
                                    ? page + 1
                                    : totalPage - 1 <= 0
                                        ? 1
                                        : totalPage - 1
                            }
                            className="w-10 text-center"
                            // Click enter to update the page.
                            onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                    const num = parseInt(e.target.value);
                                    updatePage(num);
                                    setBtnClicked(false);
                                }
                            }}
                            // Click outside to update the page.
                            onBlur={(e) => {
                                const num = parseInt(e.target.value);
                                updatePage(num);
                                setBtnClicked(false);
                            }}
                        />
                    </div>
                ) : (
                    <div onClick={() => setBtnClicked(true)}>
                        {children}
                    </div>
                )}
            </>
        )
    }

    return (
        <>
            {total !== 0 && totalPage > 1 && (
                <div className={cn(
                    "flex items-center justify-end space-x-2 my-2",
                    className
                )}>
                    <Pagination>
                        <PaginationContent>
                            <PaginationItem>
                                <PaginationPrevious
                                    className={cn(
                                        "cursor-pointer",
                                        !(page - 1 > 0) &&
                                        "text-gray-300 cursor-default hover:bg-transparent hover:text-gray-300"
                                    )}
                                    onClick={() => updatePage((page - 1 > 0) ? page - 1 : 1)}
                                />
                            </PaginationItem>
                            <SwitchWrapper notEqualTo={page == 1 ? null : [page]}>
                                <PageBtn num={1} />
                            </SwitchWrapper>
                            {page != 2 && totalPage != 2 && <PageEllipsis />}
                            {page != 1 && page != totalPage && (
                                <>
                                    <SwitchWrapper notEqualTo={[2]}>
                                        <PageBtn
                                            num={page}
                                            click={false}
                                        />
                                    </SwitchWrapper>
                                    {page != totalPage - 1 && <PageEllipsis />}
                                </>
                            )}
                            <PageBtn num={totalPage} />
                            <PaginationItem>
                                <PaginationNext
                                    className={cn(
                                        "cursor-pointer",
                                        !(page + 1 <= totalPage) &&
                                        "text-gray-300 cursor-default hover:bg-transparent hover:text-gray-300"
                                    )}
                                    onClick={() => updatePage((page + 1 <= totalPage) ? page + 1 : totalPage)}
                                />
                            </PaginationItem>
                        </PaginationContent>
                    </Pagination>
                </div>
            )}
        </>
    );
};