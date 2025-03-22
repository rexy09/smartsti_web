import { Group, Paper, Skeleton, Space } from "@mantine/core";

export  function OpportunityCardSkeleton() {
    return (
        <Paper p="md" maw="350px" radius="10px">
            {/* Skeleton for the image */}
            <Skeleton height={160} radius="sm" />

            <Space h="sm" />

            {/* Skeleton for the title */}
            <Skeleton height={18} width="70%" radius="sm" />

            <Space h="sm" />

            {/* Skeleton for the description */}
            <Skeleton height={14} width="90%" radius="sm" />

            <Space h="md" />

            {/* Skeleton for the calendar group */}
            <Group gap="xs" align="center">
                {/* Icon placeholder (circle) */}
                <Skeleton circle height={16} width={16} />
                {/* Date placeholder */}
                <Skeleton height={14} width={60} radius="sm" />
            </Group>
        </Paper>
    );
}





