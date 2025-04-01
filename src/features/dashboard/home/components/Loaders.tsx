import { Flex, Group, Paper, Skeleton, Space, Stack } from "@mantine/core";

export  function DashboardStatisticCardSkeleton() {
    return (
        <Paper radius="10px" style={{ border: "1px solid #EFF2F1" }}>
            <Stack align="flex-start" justify="space-between" h={250}>
                {/* Header Section */}
                <Flex gap="xs" align="flex-start" direction="row" p="20px">
                    <div>
                        <Group>
                            <Skeleton height={24} width={24} circle />
                            <Skeleton height={16} width={120} />
                        </Group>
                        <Space h="sm" />
                        <Group>
                            <Skeleton height={58} width={5} radius="5px" />
                            <div>
                                <Skeleton height={16} width={100} />
                                <Space h="sm" />
                                <Skeleton height={24} width={60} />
                            </div>
                        </Group>
                    </div>
                </Flex>

                {/* Bottom Section */}
                <div
                    style={{
                        padding: "20px",
                        backgroundColor: "#F9FBFC",
                        borderTop: "1px solid #EFF2F1",
                        width: "100%",
                        height: "100%",
                        borderRadius: "0 0 10px 10px",
                    }}
                >
                    <Group justify="space-between">
                        <div>
                            <Group gap={5}>
                                <Skeleton height={16} width={16} circle />
                                <Skeleton height={14} width={80} />
                                <Skeleton height={14} width={120} />
                            </Group>
                            <Group gap={5}>
                                <Skeleton height={16} width={16} circle />
                                <Skeleton height={14} width={80} />
                                <Skeleton height={14} width={120} />
                            </Group>
                           
                        </div>
                        <Skeleton height={30} width={100} radius="8px" />
                    </Group>
                </div>
            </Stack>
        </Paper>
    );
}
