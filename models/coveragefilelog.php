<?php
/*=========================================================================

  Program:   CDash - Cross-Platform Dashboard System
  Module:    $Id$
  Language:  PHP
  Date:      $Date$
  Version:   $Revision$

  Copyright (c) 2002 Kitware, Inc.  All rights reserved.
  See Copyright.txt or http://www.cmake.org/HTML/Copyright.html for details.

     This software is distributed WITHOUT ANY WARRANTY; without even
     the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR
     PURPOSE.  See the above copyright notices for more information.

=========================================================================*/
class CoverageFileLog
{  
  var $BuildId;
  var $FileId;
  var $Lines;
  
  function AddLine($number,$code)
    {
    $this->Lines[$number] = $code;
    }
  
  /** Update the content of the file */
  function Insert()
    {
    if(!$this->BuildId || !is_numeric($this->BuildId))
      {
      echo "CoverageFileLog::Insert(): BuildId not set";
      return false;    
      }
    
     $sql = "INSERT INTO coveragefilelog (buildid,fileid,line,code) VALUES ";
  
    $i=0;
    foreach($this->Lines as $lineNumber=>$code)
      {
      if($i>0)
        {
        $sql .= ",";
        }  
        
      $sql.= "(".qnum($this->BuildId).",".qnum($this->FileId).",".qnum($lineNumber).",'$code')";
       
      if($i==0)
        {
        $i++;
        }
      }
      
    pdo_query($sql);
    add_last_sql_error("CoverageFileLog::Insert()");
    return true;
    }
}
?>