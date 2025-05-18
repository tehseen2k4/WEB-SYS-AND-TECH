using System;
using System.Data;
using System.Data.SqlClient;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace WebApplication12
{
    public partial class WebForm1 : Page
    {
        SqlConnection con = new SqlConnection(
            @"Data Source=(LocalDB)\MSSQLLocalDB;AttachDbFilename=|DataDirectory|\Database1.mdf;Integrated Security=True");

        protected void Page_Load(object sender, EventArgs e)
        {
            if (!IsPostBack)
            {
                DisplayRecord(sender, e);
            }
        }

        protected void submit_Click(object sender, EventArgs e)
        {
            InsertRecord(sender, e);
        }

        protected void InsertRecord(object sender, EventArgs e)
        {
            con.Open();
            SqlCommand cmd = con.CreateCommand();
            cmd.CommandType = CommandType.Text;
            cmd.CommandText = "INSERT INTO [Table] (fname, lname, city) VALUES (@Firstname, @Lastname, @City)";
            cmd.Parameters.AddWithValue("@Firstname", fname.Text);
            cmd.Parameters.AddWithValue("@Lastname", lname.Text);
            cmd.Parameters.AddWithValue("@City", city.Text);
            cmd.ExecuteNonQuery();
            con.Close();
            DisplayRecord(sender, e);
        }

        protected void UpdateRecord(object sender, EventArgs e)
        {
            con.Open();
            SqlCommand cmd = con.CreateCommand();
            cmd.CommandType = CommandType.Text;
            // ⚠️ This is just a static update example; in real apps, use WHERE Id = @Id
            cmd.CommandText = "UPDATE [Table] SET fname = 'Jawwad' WHERE Id = 1";
            cmd.ExecuteNonQuery();
            con.Close();
            DisplayRecord(sender, e);
        }

        protected void DeleteRecord(object sender, EventArgs e)
        {
            con.Open();
            SqlCommand cmd = con.CreateCommand();
            cmd.CommandType = CommandType.Text;
            cmd.CommandText = "DELETE FROM [Table] WHERE fname = 'Jawwad'";
            cmd.ExecuteNonQuery();
            con.Close();
            DisplayRecord(sender, e);
        }

        protected void DisplayRecord(object sender, EventArgs e)
        {
            con.Open();
            SqlCommand cmd = con.CreateCommand();
            cmd.CommandType = CommandType.Text;
            cmd.CommandText = "SELECT * FROM [Table]";
            SqlDataAdapter da = new SqlDataAdapter(cmd);
            DataTable dt = new DataTable();
            da.Fill(dt);
            GridView1.DataSource = dt;
            GridView1.DataBind();
            con.Close();
        }

        // Event handler for GridView row editing
        protected void GridView1_RowEditing(object sender, GridViewEditEventArgs e)
        {
            GridView1.EditIndex = e.NewEditIndex;
            DisplayRecord(sender, e);
        }

        // Event handler for GridView row updating
        protected void GridView1_RowUpdating(object sender, GridViewUpdateEventArgs e)
        {
            int id = Convert.ToInt32(GridView1.DataKeys[e.RowIndex].Value);
            string fname = ((TextBox)GridView1.Rows[e.RowIndex].FindControl("TextBox1")).Text;
            string lname = ((TextBox)GridView1.Rows[e.RowIndex].FindControl("TextBox2")).Text;
            string city = ((TextBox)GridView1.Rows[e.RowIndex].FindControl("TextBox3")).Text;

            con.Open();
            SqlCommand cmd = new SqlCommand("UPDATE [Table] SET fname = @FirstName, lname = @LastName, city = @City WHERE Id = @Id", con);
            cmd.Parameters.AddWithValue("@FirstName", fname);
            cmd.Parameters.AddWithValue("@LastName", lname);
            cmd.Parameters.AddWithValue("@City", city);
            cmd.Parameters.AddWithValue("@Id", id);
            cmd.ExecuteNonQuery();
            con.Close();
            GridView1.EditIndex = -1;
            DisplayRecord(sender, e);
        }

        // Event handler for GridView row canceling edit
        protected void GridView1_RowCancelingEdit(object sender, GridViewCancelEditEventArgs e)
        {
            GridView1.EditIndex = -1;
            DisplayRecord(sender, e);
        }

        // Event handler for GridView row deleting
        protected void GridView1_RowDeleting(object sender, GridViewDeleteEventArgs e)
        {
            int id = Convert.ToInt32(GridView1.DataKeys[e.RowIndex].Value);

            con.Open();
            SqlCommand cmd = new SqlCommand("DELETE FROM [Table] WHERE Id = @Id", con);
            cmd.Parameters.AddWithValue("@Id", id);
            cmd.ExecuteNonQuery();
            con.Close();
            DisplayRecord(sender, e);
        }
    }
}
