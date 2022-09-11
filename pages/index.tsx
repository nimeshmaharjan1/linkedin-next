import Page from "@components/layout/Page";
import Sidebar from "@features/feed/components/Sidebar";

import type { NextPage } from "next";

import { CtxOrReq } from "next-auth/client/_utils";
import { getSession, useSession } from "next-auth/react";
import { useRouter } from "next/router";

const Feed: NextPage = () => {
  const router = useRouter();
  const { status } = useSession({
    required: true,
    onUnauthenticated() {
      router.push("/auth/login");
    },
  });

  return (
    <Page title="Feed" description="The feed page of tuza hiring">
      <section className="flex justify-center gap-x-5 px-4 sm:px-12">
        <div className="flex flex-col md:flex-row gap-5">
          <Sidebar />
          {/* Feed */}
        </div>
        {/* Widgets */}
      </section>
    </Page>
  );
};

export default Feed;

export async function getServerSideProps(context: CtxOrReq) {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        permanent: false,
        destination: "/auth/login",
      },
    };
  }
  return {
    props: {
      session,
    },
  };
}
